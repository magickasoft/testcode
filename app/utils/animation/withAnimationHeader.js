import * as React from 'react';
import Animated from 'react-native-reanimated';
import { transform, nativeEvent } from '../../utils/animation';

const {
  Value,
  diffClamp,
  multiply,
  interpolate,
  cond,
  set,
  add,
  startClock,
  clockRunning,
  stopClock,
  Clock,
  sub,
  lessThan,
  spring,
  eq,
  neq,
  Extrapolate,
  greaterThan
} = Animated;

const DRAG_END_INITIAL = 10000000;

function runSpring({
  clock,
  from,
  velocity,
  toValue,
  scrollEndDragVelocity,
  snapOffset,
  diffClampNode,
  navBarHeight
}) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0)
  };

  const config = {
    damping: 1,
    mass: 1,
    stiffness: 50,
    overshootClamping: true,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
    toValue: new Value(0)
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.velocity, velocity),
      set(state.position, from),
      set(config.toValue, toValue),
      startClock(clock)
    ]),
    spring(clock, state, config),
    cond(state.finished, [
      set(scrollEndDragVelocity, DRAG_END_INITIAL),
      set(
        snapOffset,
        cond(
          eq(toValue, 0),
          add(snapOffset, multiply(diffClampNode, -1)),
          add(snapOffset, sub(navBarHeight, diffClampNode)),
        ),
      ),
      stopClock(clock)
    ]),
    state.position
  ];
}

const Animation = (navBarHeight) => (Component) =>
  class CollapsibleNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.translateY = new Value(0);
      this.velocityY = new Value(DRAG_END_INITIAL);
      this.snapOffset = new Value(0);

      const diffClampNode = diffClamp(
        add(this.translateY, this.snapOffset),
        0,
        navBarHeight,
      );

      const inverseDiffClampNode = multiply(diffClampNode, -1);

      const clock = new Clock();

      const snapPoint = cond(
        lessThan(diffClampNode, navBarHeight / 2),
        0,
        -navBarHeight,
      );

      this.animatedNavBarTranslateY = cond(
        greaterThan(this.translateY, 0),
        cond(
          neq(this.velocityY, DRAG_END_INITIAL),
          runSpring({
            clock,
            from: inverseDiffClampNode,
            velocity: 0,
            toValue: snapPoint,
            scrollEndDragVelocity: this.velocityY,
            snapOffset: this.snapOffset,
            diffClampNode,
            navBarHeight
          }),
          inverseDiffClampNode,
        ),
      );

      this.headerContainerAnimate = transform.translateY(
        interpolate(this.animatedNavBarTranslateY, {
          inputRange: [-navBarHeight, 0],
          outputRange: [-navBarHeight + 15, 0],
          extrapolate: Extrapolate.CLAMP
        })
      );

      this.tabBarsOpacity = {
        opacity: interpolate(this.animatedNavBarTranslateY, {
          inputRange: [-navBarHeight / 2, 0],
          outputRange: [0, 1],
          extrapolate: Extrapolate.CLAMP
        })
      };
    }

    render() {
      const animation = {
        tabBarsOpacity: this.tabBarsOpacity,
        headerTranslateY: this.headerContainerAnimate,
        onScroll: nativeEvent.y(this.translateY),
        onScrollEndDrag: nativeEvent.velocityY(this.velocityY)
      };

      return (
        <Component
          animation={animation}
          {...this.props}
        />
      );
    }
  };

export default Animation;

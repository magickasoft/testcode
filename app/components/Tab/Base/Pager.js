import React from 'react';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { pure } from 'recompose';
import T from 'prop-types';

import { dimensions } from '../../../styles';
import { transform } from '../../../utils/animation';
// import { isMoveEnd } from './check';

// const {
// set,
// cond,
// eq,
// and,
// greaterOrEq,
// lessOrEq,
// block,
// or,
// sub,
// Value,
// Clock,
// event,
// neq,
// debug,
// add,
//  = Animated;


// TODO: 1 - FIX SWIPE
// TODO: 2 - tab bar s
// TODO: 3 - simultaneous installation of properties isSwipeable and isAnimatable,

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 200,
  },
});

class Pager extends React.Component { // eslint-disable-line
  // constructor(props) {
  // super(props);
  // const { children } = props;


  // this._countTabs = new Value(children.length);
  // this._onSwipe = this._createOnSwipeEvent();
  // }

  // _createOnSwipeEvent = () => {
  //   const {
  //     isSwipeable, trans, // changeTab, animation,
  //   } = this.props;
  //
  //   return isSwipeable
  //     ? event(
  //       [{
  //         nativeEvent: ({ translationX: x, state }) => block([
  //           cond(
  //             this._checkCanSwipe(x),
  //             set(trans.x, x),
  //           ),
  //           // TODO: THIS FIX SWIPE, need to add rule
  //           cond(
  //             and(this._checkCanSwipe(x), isMoveEnd(state)),
  //             block([
  //               debug('this.trans.x', trans.x),
  //               animation(),
  //               this._animationTransX(x),
  //             ]),
  //           ),
  //         ]),
  //       }],
  //       { useNativeDriver: true }
  //     )
  //     : undefined;
  // };

  // _checkCanSwipe = x => {
  //   const { currentTab } = this.props.press;
  //
  //   return and(
  //     cond(eq(currentTab, 0), lessOrEq(x, 0), 1),
  //     cond(eq(currentTab, sub(this._countTabs, 1)), greaterOrEq(x, 0), 1),
  //   );
  // };
  //
  // _animationTransX = (x) => {
  //   const clock = new Clock();
  //   const { trans } = this.props;
  //
  //   return block([
  //     set(
  //       trans.x,
  //       this.props.timing(
  //         clock,
  //         x,
  //         0,
  //       ),
  //     )]);
  // };

  render = () => {
    const {
      routes,
      height,
      width,
      children,
      style,
      tabs,
      trans,
      isSwipeable,
      currentTab,
    } = this.props;

    const routesLength = routes.length;
    const Container = isSwipeable ? PanGestureHandler : Animated.View;

    return (
      <Container
        // onGestureEvent={onSwipe}
        // onHandlerStateChange={onSwipe}
        maxPointers={1}
      >
        <Animated.View
          style={[
            s.container,
            { height: height || '100%', width: width * routesLength },
            transform.translateX(trans.sumX),
            style,
          ]}
        >
          {children.map((el, index) => (
            <Animated.View key={index} style={{ width, height: '100%' /* eslint-disable-line */ }}>
              {tabs[index] && React.cloneElement(el, {
                  ...el.props,
                  tabIndex: index,
                  currentTab,
                })
              }
            </Animated.View>
          ))}
        </Animated.View>
      </Container>
    );
  }
}

Pager.defaultProps = {
  height: undefined,
  width: dimensions.windowWidth,
};

Pager.propTypes = {
  height: T.number,
  width: T.number,
  // onSwipe: T.func,
  routes: T.arrayOf(T.object),
  children: T.node,
  trans: T.object,
  tabs: T.object,
  style: T.oneOfType([T.object, T.number]),
  isSwipeable: T.bool,
  currentTab: T.number,
  // press: T.object,
  // changeTab: T.func,
  // timing: T.func,
};

export default pure(Pager);

import React from 'react';
import Animated from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { pure } from 'recompose';
import T from 'prop-types';

import { dimensions } from '../../../styles';
import { isEventEnd, isBegan } from './check';

const {
  set,
  cond,
  eq,
  divide,
  greaterThan,
  block,
  sub,
  ceil,
  Value,
  event,
} = Animated;

const s = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    const { routes, width } = props;

    this._widthButton = new Value(width / routes.length);
    this._onPressButton = this._createOnPressButtonEvent();
  }

  _createOnPressButtonEvent = () => {
    const { press, changeTab } = this.props;

    return event(
      [{
        nativeEvent: ({ absoluteX, state }) => block([
          cond(
            isBegan(state, absoluteX),
            block([
              set(press.currentTab, this._getPressedTab(absoluteX)),
              set(press.opacity, 0.5),
            ])
          ),
          cond(
            isEventEnd(state),
            block([
              set(press.opacity, 1),
              changeTab(),
            ]),
          ),
        ]),
      }],
      { useNativeDriver: true }
    );
  };

  _getPressedTab = absoluteX => cond(
    greaterThan(absoluteX, 0),
    sub(ceil(divide(absoluteX, this._widthButton)), 1)
  );

  _onLayout = ({ nativeEvent: { layout: { width } } }) => {
    const { routes } = this.props;

    this._widthButton.setValue(width / routes.length);
  };

  _setOpacity = index => {
    const { press } = this.props;

    return cond(
      eq(press.currentTab, new Value(index)),
      press.opacity,
      1
    );
  };


  render = () => {
    const {
      routes,
      renderItemButton,
      containerStyle,
      style,
      press,
    } = this.props;

    const routesLength = routes.length;

    const getStyle = index => ({
      opacity: this._setOpacity(index),
      flex: 1,
    });

    return (
      <TapGestureHandler
        numberOfPointers={1}
        onHandlerStateChange={this._onPressButton}
      >
        <Animated.View
          style={[containerStyle, s.tabBarContainer]}
          onLayout={this._onLayout}
        >
          {routes.map((el, index) => (
            <Animated.View
              style={[style, getStyle(index)]}
              key={index} // eslint-disable-line
            >
              {renderItemButton(el, {
                isCurrentTab: eq(press.currentTab, new Value(index)),
                isLast: index === (routesLength - 1),
              })}
            </Animated.View>
          ))}
        </Animated.View>
      </TapGestureHandler>
    );
  };
}

TabBar.defaultProps = {
  width: dimensions.windowWidth,
};

TabBar.propTypes = {
  press: T.object,

  // render elements
  renderItemButton: T.func,
  routes: T.arrayOf(T.object),

  // config
  width: T.number,
  changeTab: T.func,

  // s
  containerStyle: T.oneOfType([T.object, T.number]),
  style: T.oneOfType([T.object, T.number]),
};

export default pure(TabBar);

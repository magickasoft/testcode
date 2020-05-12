import React from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import T from 'prop-types';
import { pure } from 'recompose';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { dimensions } from '../../../styles';
import Pager from './Pager';
import TabBar from './TabBar';
import createTiming from './createTiming';

const {
  add,
  multiply,
  Value,
  set,
  neq,
  cond,
  block,
  call,
  Clock,
  stopClock,
} = Animated;

const s = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomShadow: {
    height: 1,
    backgroundColor: '#d8d8d8',
  },
  container: {
    overflow: 'hidden',
  },
});

const typesTabBar = {
  top: 'top',
  bottom: 'bottom',
};

// TODO: 1 - FIX SWIPE
// TODO: 2 - tab bar s
// TODO: 3 - simultaneous installation of properties isSwipeable and isAnimatable,

class TabView extends React.Component {
  constructor(props) {
    super(props);
    const { initTab } = props;

    const { width } = props.initialLayout;

    this.state = {
      tabs: {},
      currentTab: initTab,
    };

    this.state.tabs[initTab] = true;

    this.press = {
      opacity: new Value(1),
      currentTab: new Value(initTab),
      prevTab: new Value(-1),
    };

    this.trans = {
      x: new Value(0),
      currentTab: new Value(initTab),
    };

    this.trans.sumX = add(
      multiply(this.trans.currentTab, -width),
      this.trans.x
    );
  }

  // componentWillUnmount() {
  //   console.log('this.props', this.props);
  //   debugger
  //   console.log('this.props', this.props);
  // }

  timing = createTiming(this.props.duration);

  updateTab = () => {
    const { currentTab, prevTab } = this.press;

    return cond(
      neq(currentTab, prevTab),
      block([
        call([currentTab], (args) => {
          ReactNativeHapticFeedback.trigger('impactMedium');

          this.setState({
            tabs: {
              ...this.state.tabs,
              [args[0]]: true,
            },
            currentTab: args[0],
          });
        }),
      ]),
    );
  };

  changeTab = () => block([
    this.updateTab(),
    set(
      this.trans.currentTab,
      cond(
        new Value(this.props.isAnimatable ? 1 : 0),
        this.animation(this.press.currentTab),
        this.press.currentTab
      ),
    ),
  ]);

  animation = finalValue => {
    const { press, trans } = this;

    const clock = new Clock();

    return block([
      cond(
        neq(press.currentTab, press.prevTab),
        stopClock(clock),
      ),
      set(press.prevTab, press.currentTab),
      this.timing(
        clock,
        trans.currentTab,
        finalValue,
      ),
    ]);
  };

  _renderTabBar = () => {
    const {
      top,
      bottom,
      left,
      right,
      styleContainerTopBottom,
      styleContainerRightLeft,
      duration,
      routes,
      renderItemButton,
      tabBarContainerStyle,
      containerButtonStyle,
      displayBottomShadow,
    } = this.props;

    const { width } = this.props.initialLayout;

    return (
      <Animated.View style={[styleContainerTopBottom]}>
        {top}
        <Animated.View style={[styleContainerRightLeft, s.tabBarContainer]}>
          {left}
          <TabBar
            duration={duration}
            trans={this.trans}
            press={this.press}
            tabs={this.state.tabs}
            width={width}
            routes={routes}
            renderItemButton={renderItemButton}
            containerStyle={tabBarContainerStyle}
            style={containerButtonStyle}
            changeTab={this.changeTab}
          />
          {right}
        </Animated.View>
        {bottom}
        {displayBottomShadow && (
          <Animated.View style={s.bottomShadow} />
        )}
      </Animated.View>
    );
  };

  render() {
    const {
      children,
      typeTabBar,
      initialLayout: {
        height,
        width,
      },
      routes,
      containerStyle,
      styleContainerPager,
      style,
      isSwipeable,
      isAnimatable,
      duration,
    } = this.props;


    return (
      <Animated.View style={[s.container, containerStyle]}>
        {typesTabBar.top === typeTabBar && this._renderTabBar()}
        <Animated.View style={styleContainerPager}>
          <Pager
            currentTab={this.state.currentTab}
            duration={duration}
            routes={routes}
            height={height}
            width={width}
            style={style}
            isSwipeable={isSwipeable}
            isAnimatable={isAnimatable}
            tabs={this.state.tabs}
            trans={this.trans}
            press={this.press}
            changeTab={this.changeTab}
            timing={this.timing}
          >
            {children}
          </Pager>
        </Animated.View>
        {typesTabBar.bottom === typeTabBar && this._renderTabBar()}
      </Animated.View>
    );
  }
}

TabView.defaultProps = {
  initialLayout: {
    height: undefined,
    width: dimensions.windowWidth,
  },
  typeTabBar: 'top',
  initTab: 0,
  duration: 300,
  isAnimatable: true,
  isSwipeable: false,
  displayBottomShadow: true,
};

TabView.propTypes = {
  // render elements
  top: T.node,
  bottom: T.node,
  left: T.node,
  right: T.node,
  renderItemButton: T.func,
  routes: T.arrayOf(T.object),
  children: T.node,

  // config
  duration: T.number,
  initTab: T.number,
  isSwipeable: T.bool, // eslint-disable-line
  isAnimatable: T.bool, // eslint-disable-line
  initialLayout: T.shape({
    height: T.number,
    width: T.number,
  }),
  typeTabBar: T.oneOf([
    'top',
    'bottom',
  ]),

  // s
  styleContainerTopBottom: T.any,
  styleContainerRightLeft: T.any,
  tabBarContainerStyle: T.any,
  containerButtonStyle: T.any,
  styleContainerPager: T.any,
  containerStyle: T.any,
  style: T.any,
  displayBottomShadow: T.bool,
};

export default pure(TabView);

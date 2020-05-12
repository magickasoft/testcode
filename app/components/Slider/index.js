/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  PanResponder,
  View,
  TouchableHighlight,
  Platform,
  I18nManager,
  Animated,
} from 'react-native';
import { onlyUpdateForKeys } from 'recompose';

const BIG_SIZE = 1.5;
const SIZE = 1;

import DefaultMarker from './DefaultMarker';
import { createArray, valueToPosition, positionToValue } from './converters';
import {colors } from "../../styles";

const ViewPropTypes = require('react-native').ViewPropTypes || View.propTypes;
class MultiSlider extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
    initialValues: PropTypes.arrayOf(PropTypes.number),

    onValuesChangeStart: PropTypes.func,
    onValuesChange: PropTypes.func,
    onValuesChangeFinish: PropTypes.func,

    sliderLength: PropTypes.number,
    touchDimensions: PropTypes.object,

    customMarker: PropTypes.func,

    customMarkerLeft: PropTypes.func,
    customMarkerRight: PropTypes.func,
    isMarkersSeparated: PropTypes.bool,

    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,

    optionsArray: PropTypes.array,

    containerStyle: ViewPropTypes.style,
    trackStyle: ViewPropTypes.style,
    selectedStyle: ViewPropTypes.style,
    unselectedStyle: ViewPropTypes.style,
    markerContainerStyle: ViewPropTypes.style,
    markerStyle: ViewPropTypes.style,
    pressedMarkerStyle: ViewPropTypes.style,
    valuePrefix: PropTypes.string,
    valueSuffix: PropTypes.string,
    enabledOne: PropTypes.bool,
    enabledTwo: PropTypes.bool,
    onToggleOne: PropTypes.func,
    onToggleTwo: PropTypes.func,
    allowOverlap: PropTypes.bool,
    snapped: PropTypes.bool,
    markerOffsetX: PropTypes.number,
    markerOffsetY: PropTypes.number,
    vertical: PropTypes.bool,
    showCurrentValueOne: PropTypes.func,
    showCurrentValueTwo: PropTypes.func,
  };

  static defaultProps = {
    values: [0],
    initialValues: [0],
    onValuesChangeStart: () => {
    },
    onValuesChange: values => {
    },
    onValuesChangeFinish: values => {
    },
    step: 1,
    min: 0,
    max: 10,
    touchDimensions: {
      height: 50,
      width: 50,
      borderRadius: 15,
      slipDisplacement: 200,
    },
    customMarker: DefaultMarker,

    customMarkerLeft: DefaultMarker,
    customMarkerRight: DefaultMarker,

    markerOffsetX: 0,
    markerOffsetY: 0,
    sliderLength: 280,
    onToggleOne: undefined,
    onToggleTwo: undefined,
    enabledOne: true,
    enabledTwo: true,
    allowOverlap: false,
    snapped: false,
    vertical: false,
  };

  constructor(props) {
    super(props);

    this.optionsArray = props.optionsArray ||
      createArray(props.min, props.max, props.step);
    this.stepLength = props.sliderLength / this.optionsArray.length;

    var initialValues = props.initialValues.map(value =>
      valueToPosition(value, this.optionsArray, props.sliderLength));

    this.state = {
      pressedOne: true,
      valueOne: props.initialValues[0],
      valueTwo: props.initialValues[1],
      pastOne: initialValues[0],
      pastTwo: initialValues[1],
      positionOne: initialValues[0],
      positionTwo: initialValues[1],
      scaleOne: new Animated.Value(1),
      scaleTwo: new Animated.Value(1),
    };
  }

  componentWillMount() {
    var customPanResponder = (start, move, end) => {
      return PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => start(),
        onPanResponderMove: (evt, gestureState) => move(gestureState),
        onPanResponderTerminationRequest: (evt, gestureState) => false,
        onPanResponderRelease: (evt, gestureState) => end(gestureState),
        onPanResponderTerminate: (evt, gestureState) => end(gestureState),
        onShouldBlockNativeResponder: (evt, gestureState) => true,
      });
    };

    this._panResponderOne = customPanResponder(
      this.startOne,
      this.moveOne,
      this.endOne,
    );
    this._panResponderTwo = customPanResponder(
      this.startTwo,
      this.moveTwo,
      this.endTwo,
    );
  }

  changeSize = (state, size) => {
    Animated.spring(state, {
      friction: 3,
      toValue: size,
      useNativeDriver: true,
    }).start();
  };

  startOne = () => {
    if (this.props.enabledOne) {
      this.props.onValuesChangeStart();
      this.changeSize(this.state.scaleOne, BIG_SIZE);
      this.setState({
        onePressed: !this.state.onePressed,
      });
    }
  };

  startTwo = () => {
    if (this.props.enabledTwo) {
      this.props.onValuesChangeStart();
      this.changeSize(this.state.scaleTwo, BIG_SIZE);
      this.setState({
        twoPressed: !this.state.twoPressed,
      });
    }
  };

  moveOne = (gestureState) => {
    if (!this.props.enabledOne) {
      return;
    }

    const accumDistance = this.props.vertical ? -gestureState.dy : gestureState.dx;
    const accumDistanceDisplacement = this.props.vertical ? gestureState.dx : gestureState.dy;

    const unconfined = I18nManager.isRTL ? this.state.pastOne - accumDistance : accumDistance + this.state.pastOne;
    var bottom = 0;
    var trueTop = this.state.positionTwo - (this.props.allowOverlap ? 0 : this.stepLength);
    var top = trueTop === 0 ? 0 : trueTop || this.props.sliderLength;
    var confined = unconfined < bottom
      ? bottom
      : unconfined > top ? top : unconfined;
    var slipDisplacement = this.props.touchDimensions.slipDisplacement;

    if (Math.abs(accumDistanceDisplacement) < slipDisplacement || !slipDisplacement) {
      var value = positionToValue(
        confined,
        this.optionsArray,
        this.props.sliderLength,
      );
      var snapped = valueToPosition(
        value,
        this.optionsArray,
        this.props.sliderLength,
      );
      this.setState({
        positionOne: this.props.snapped ? snapped : confined,
      });

      if (value !== this.state.valueOne) {
        this.setState(
          {
            valueOne: value,
          },
          () => {
            var change = [this.state.valueOne];
            if (this.state.valueTwo) {
              change.push(this.state.valueTwo);
            }
            this.props.onValuesChange(change);
          },
        );
      }
    }
  };

  moveTwo = gestureState => {
    if (!this.props.enabledTwo) {
      return;
    }

    const accumDistance = this.props.vertical ? -gestureState.dy : gestureState.dx;
    const accumDistanceDisplacement = this.props.vertical ? gestureState.dx : gestureState.dy;

    const unconfined = I18nManager.isRTL ? this.state.pastTwo - accumDistance : accumDistance + this.state.pastTwo;
    var bottom = this.state.positionOne + (this.props.allowOverlap ? 0 : this.stepLength);
    var top = this.props.sliderLength;
    var confined = unconfined < bottom
      ? bottom
      : unconfined > top ? top : unconfined;
    var slipDisplacement = this.props.touchDimensions.slipDisplacement;

    if (Math.abs(accumDistanceDisplacement) < slipDisplacement || !slipDisplacement) {
      var value = positionToValue(
        confined,
        this.optionsArray,
        this.props.sliderLength,
      );
      var snapped = valueToPosition(
        value,
        this.optionsArray,
        this.props.sliderLength,
      );

      this.setState({
        positionTwo: this.props.snapped ? snapped : confined,
      });

      if (value !== this.state.valueTwo) {
        this.setState(
          {
            valueTwo: value,
          },
          () => {
            this.props.onValuesChange([this.state.valueOne, this.state.valueTwo]);
          },
        );
      }
    }
  };

  endOne = gestureState => {
    if (gestureState.moveX === 0 && this.props.onToggleOne) {
      this.props.onToggleOne();
      return;
    }
    this.changeSize(this.state.scaleOne, SIZE);

    this.setState(
      {
        pastOne: this.state.positionOne,
        onePressed: !this.state.onePressed,
      },
      () => {
        var change = [this.state.valueOne];
        if (this.state.valueTwo) {
          change.push(this.state.valueTwo);
        }
        this.props.onValuesChangeFinish(change);
      },
    );
  };

  endTwo = gestureState => {
    if (gestureState.moveX === 0 && this.props.onToggleTwo) {
      this.props.onToggleTwo();
      return;
    }
    this.changeSize(this.state.scaleTwo, SIZE);

    this.setState(
      {
        twoPressed: !this.state.twoPressed,
        pastTwo: this.state.positionTwo,
      },
      () => {
        this.props.onValuesChangeFinish([
          this.state.valueOne,
          this.state.valueTwo,
        ]);
      },
    );
  };

  render() {
    const { positionOne, positionTwo } = this.state;
    const { selectedStyle, unselectedStyle, sliderLength, markerOffsetX, markerOffsetY } = this.props;
    const twoMarkers = this.props.values.length == 2;   // when allowOverlap, positionTwo could be 0, identified as string '0' and throwing 'RawText 0 needs to be wrapped in <Text>' error

    const trackOneLength = positionOne;
    const trackOneStyle = twoMarkers
      ? unselectedStyle
      : selectedStyle || styles.selectedTrack;
    const trackThreeLength = twoMarkers ? sliderLength - positionTwo : 0;
    const trackThreeStyle = unselectedStyle;
    const trackTwoLength = sliderLength - trackOneLength - trackThreeLength;
    const trackTwoStyle = twoMarkers
      ? selectedStyle || styles.selectedTrack
      : unselectedStyle;
    const Marker = this.props.customMarker;

    const MarkerLeft = this.props.customMarkerLeft;
    const MarkerRight = this.props.customMarkerRight;
    const isMarkersSeparated = this.props.isMarkersSeparated || false;

    const {
      slipDisplacement,
      height,
      width,
      borderRadius,
    } = this.props.touchDimensions;
    const touchStyle = {
      borderRadius: borderRadius || 0,
    };

    const markerContainerOne = { top: markerOffsetY - 48, left: trackOneLength + markerOffsetX - 24 };

    const markerContainerTwo = { top: markerOffsetY - 48, right: trackThreeLength + markerOffsetX - 24 };

    const containerStyle = [styles.container, this.props.containerStyle];

    if (this.props.vertical) {
      containerStyle.push({
        transform: [{ rotate: '-90deg' }],
      })
    }

    return (
      <View style={containerStyle}>
        <View style={[styles.fullTrack, { width: sliderLength}]}>
          <View
            style={[
              styles.track,
              this.props.trackStyle,
              trackOneStyle,
              { width: trackOneLength},
            ]}
          />
          <View
            style={[
              styles.track,
              this.props.trackStyle,
              trackTwoStyle,
              { width: trackTwoLength },
            ]}
          />
          {twoMarkers &&
          <View
            style={[
              styles.track,
              this.props.trackStyle,
              trackThreeStyle,
              { width: trackThreeLength},
            ]}
          />}
          <View
            style={[
              styles.markerContainer,
              markerContainerOne,
              this.props.markerContainerStyle,
              positionOne > sliderLength / 2 && styles.topMarkerContainer,
            ]}
          >
            <View
              style={[styles.touch, touchStyle]}
              ref={component => this._markerOne = component}
              {...this._panResponderOne.panHandlers}
            >
              {isMarkersSeparated === false ?
                <Marker
                  enabled={this.props.enabledOne}
                  pressed={this.state.onePressed}
                  markerStyle={this.props.markerStyle}
                  animation={this.state.scaleOne}
                  pressedMarkerStyle={this.props.pressedMarkerStyle}
                  currentValue={this.state.valueOne}
                  showCurrentValue={this.props.showCurrentValueOne}
                />
                :
                <MarkerLeft
                  enabled={this.props.enabledOne}
                  pressed={this.state.onePressed}
                  markerStyle={this.props.markerStyle}
                  animation={this.state.scaleOne}
                  pressedMarkerStyle={this.props.pressedMarkerStyle}
                  currentValue={this.state.valueOne}
                  showCurrentValue={this.props.showCurrentValueOne}
                />
              }

            </View>
          </View>
          {twoMarkers &&
          positionOne !== this.props.sliderLength &&
          <View style={[styles.markerContainer, markerContainerTwo, this.props.markerContainerStyle]}>
            <View
              style={[styles.touch, touchStyle]}
              ref={component => this._markerTwo = component}
              {...this._panResponderTwo.panHandlers}
            >
              {isMarkersSeparated === false ?
                <Marker
                  pressed={this.state.twoPressed}
                  markerStyle={this.props.markerStyle}
                  animation={this.state.scaleTwo}
                  pressedMarkerStyle={this.props.pressedMarkerStyle}
                  currentValue={this.state.valueTwo}
                  enabled={this.props.enabledTwo}
                  showCurrentValue={this.props.showCurrentValueTwo}
                />
                :
                <MarkerRight
                  pressed={this.state.twoPressed}
                  markerStyle={this.props.markerStyle}
                  animation={this.state.scaleTwo}
                  pressedMarkerStyle={this.props.pressedMarkerStyle}
                  currentValue={this.state.valueTwo}
                  enabled={this.props.enabledTwo}
                  showCurrentValue={this.props.showCurrentValueTwo}
                />
              }
            </View>
          </View>}
        </View>
      </View>
    );
  }
}

const TRACK_SIZE = 2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
    height: 80,
    justifyContent: 'center',
  },
  fullTrack: {
    flexDirection: 'row',
  },
  track: {
    height: TRACK_SIZE,
    borderRadius: TRACK_SIZE / 2,
    backgroundColor: '#A7A7A7',
  },
  unSelectedTrack: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 48,
  },
  selectedTrack: {
    backgroundColor: colors.activePrimary,
  },
  markerContainer: {
    position: 'absolute',
    width: 48,
    height: 96,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMarkerContainer: {
    zIndex: 1,
  },
  touch: {
    width: 48,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default onlyUpdateForKeys(['selectedStyle', 'markerStyle'])(MultiSlider);

import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Animated } from 'react-native';
import { transform } from '../../utils/animation';
import { colors, dimensions } from '../../styles';

import Text from '../Text';

const ViewPropTypes = require('react-native').ViewPropTypes || View.propTypes;

const RADIUS = dimensions.indent * 1.5;

const s = StyleSheet.create({
  markerStyle: {
    backgroundColor: colors.white,
    height: RADIUS * 2,
    width: RADIUS * 2,
    borderRadius: RADIUS,
    marginBottom: RADIUS * 1.8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  pressedMarkerStyle: {

  },
  disabled: {
    backgroundColor: '#d3d3d3'
  },
  text: {
    marginTop: RADIUS - dimensions.indent / 2,
    marginBottom: dimensions.indent / 2,
    alignSelf: 'center',
    textAlign: 'center'
  }
});

const DefaultMarker = ({
  currentValue,
  animation,
  markerStyle,
  pressed,
  pressedMarkerStyle,
  enabled,
  showCurrentValue
}) => {
  const translateY = animation.interpolate({
    inputRange: [1, 1.5],
    outputRange: [0, -5]
  });

  return (
    <React.Fragment>
      <Animated.View style={{ transform: [{ scale: animation }, { translateY }] }}>
        <Text style={s.text}>
          {showCurrentValue ? showCurrentValue(currentValue) : currentValue}
        </Text>
      </Animated.View>
      <Animated.View
        style={enabled ? [
          s.markerStyle,
          markerStyle,
          transform.scale(animation),
          pressed && s.pressedMarkerStyle,
          pressed && pressedMarkerStyle
        ] : [s.markerStyle, s.disabled]}
      />
    </React.Fragment>
  );
};

DefaultMarker.propTypes = {
  animation: PropTypes.object,
  currentValue: PropTypes.number,
  enabled: PropTypes.bool,
  markerStyle: ViewPropTypes.style,
  pressed: PropTypes.bool,
  pressedMarkerStyle: ViewPropTypes.style,
  showCurrentValue: PropTypes.func
};

export default DefaultMarker;

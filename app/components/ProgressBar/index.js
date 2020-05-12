import React from 'react';
import { Animated, View } from 'react-native';
import T from 'prop-types';
import s from './style';

const ProgressBar = ({ value }) => (
  <View style={s.indicatorRoot}>
    <View style={s.indicatorContainer}>
      <Animated.View style={[s.indicator, { width: `${value * 100}%` }]} />
    </View>
  </View>
);

ProgressBar.propTypes = {
  value: T.number
};

export default ProgressBar;

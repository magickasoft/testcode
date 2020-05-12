import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import T from 'prop-types';
import { colors } from '../../styles';

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.transparent
  }
});

const Container = ({ style, viewRef, ...props }) => (
  <Animated.View
    ref={viewRef}
    style={[s.root, style]}
    {...props}
  />
);

Container.propTypes = {
  style: T.oneOfType([T.object, T.number, T.array]),
  viewRef: T.oneOfType([T.object, T.func])
};

export default Container;

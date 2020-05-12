import React from 'react';
import T from 'prop-types';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import {
  withHandlers,
  withProps,
  withState,
  compose,
  defaultProps,
  setPropTypes,
} from 'recompose';

const SIZE = 1;
const SIZE_SCALE = SIZE * 1.5;

const wrapper = Component => ({
  animate, // eslint-disable-line
  onPress, // eslint-disable-line
  onAnimate, // eslint-disable-line
  scale, // eslint-disable-line
  durationIn, // eslint-disable-line
  durationOut, // eslint-disable-line
  ...props
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Animated.View style={animate}>
      <Component {...props} />
    </Animated.View>
  </TouchableWithoutFeedback>
);

const scaleOnPress = compose(
  setPropTypes({
    scale: T.number,
    durationIn: T.number,
    durationOut: T.number,
  }),
  defaultProps({
    scale: SIZE_SCALE,
    durationIn: 100,
    durationOut: 100,
  }),
  withState('animValue', 'setAnimValue', () => new Animated.Value(SIZE)),
  withHandlers({
    onAnimate: props => (duration, toValue) => {
      Animated.timing(props.animValue, {
        duration,
        toValue,
        useNativeDriver: true,
      }).start();
    },
  }),
  withHandlers({
    onPress: props => e => {
      props.onAnimate(props.durationIn, props.scale);
      props.onPress && props.onPress(e);
    },
  }),
  withProps(({ animValue }) => ({
    animate: {
      transform: [{ scale: animValue }],
    },
  })),
  wrapper,
);


export default scaleOnPress;

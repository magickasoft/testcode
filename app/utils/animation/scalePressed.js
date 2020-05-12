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
const SIZE_SCALE = SIZE * 1.3;

const wrapper = Component => ({
  animate, // eslint-disable-line
  onPress, // eslint-disable-line
  onPressIn, // eslint-disable-line
  onPressOut, // eslint-disable-line
  onAnimate, // eslint-disable-line
  scale, // eslint-disable-line
  durationIn, // eslint-disable-line
  durationOut, // eslint-disable-line
  ...props
}) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <Animated.View style={animate}>
      <Component {...props} />
    </Animated.View>
  </TouchableWithoutFeedback>
);

const scalePressed = compose(
  setPropTypes({
    scale: T.number,
  }),
  defaultProps({
    scale: SIZE_SCALE,

  }),
  withState('animValue', 'setAnimValue', () => new Animated.Value(SIZE)),
  withHandlers({
    onAnimate: props => (toValue) => {
      Animated.spring(props.animValue, {
        friction: 3,
        toValue,
        useNativeDriver: true,
      }).start();
    },
  }),
  withHandlers({
    onPressIn: props => e => {
      props.onAnimate(props.scale);
      props.onPressIn && props.onPressIn(e);
    },
    onPressOut: props => e => {
      props.onAnimate(SIZE);
      props.onPressOut && props.onPressOut(e);
    },
  }),
  withProps(({ animValue }) => ({
    animate: {
      transform: [{ scale: animValue }],
    },
  })),
  wrapper,
);


export default scalePressed;

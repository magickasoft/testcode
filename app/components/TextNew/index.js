/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import { Text as Txt, Animated } from 'react-native';
import Reanimated from 'react-native-reanimated';

import s from './styles';
import { moderateScale } from '../../styles/scalingUtils';

const TextNew = ({
  isAnimated = true,
  isReanimated = false,
  color,
  type,
  size,
  style,
  ...props
}) => {

  const Component = isReanimated
    ? Reanimated.Text
    : isAnimated
      ? Animated.Text
      : Txt;

  return (
    <Component
      {...props}
      style={[
          type && s[type],
          style,
          size && { fontSize: moderateScale(size) },
          color && { color },
        ]}
    />
  )
};

TextNew.propTypes = {
  marginLeft: T.number,
  style: T.oneOfType([
    Animated.Text.propTypes.style,
    T.object,
  ]),
  size: T.number,
  type: T.oneOf([
    'error',
    'title',
    'xxRate',
    'reviews', // TODO: change this name
    'point',
    'link',
  ]),
};

export default TextNew;


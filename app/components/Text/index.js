/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import { Text as Txt, Animated } from 'react-native';
import Reanimated from 'react-native-reanimated';
import s from './styles';
import { moderateScale } from '../../styles/scalingUtils';


const Text = ({
  isAnimated = true,
  isReanimated = false,
  color,
  type = 'default',
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

Text.propTypes = {
  marginLeft: T.number,
  style: T.oneOfType([
    Animated.Text.propTypes.style,
    T.object,
  ]),
  size: T.number,
  type: T.oneOf([
    'default',
    'title',
    'xxRate',
    'reviews',
    'point',
    'xSmallPoint',
    'link',
    'bold',

     // old
    'h1',
    'h2',
    'titleNavBar',
    'subtitleNavBar',
    'label',
    'dedicatedNumber',
    'regular',
    'name',
    'date',
  ]),
};

export default Text;


/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import Animated from 'react-native-reanimated';
import { Rect } from 'react-native-svg';

import { Text, ContentLoader } from '@components';
import { dimensions, colors } from '@styles';

import s from './styles';

const AnimatedTitle = ({
  containerStyle,
  titleStyle,
  title,
  isAbsolute,
  isLoading,
  ...props
}) => (
  <Animated.View
    style={[
      isAbsolute && s.titleAbsoluteContainer,
      !isAbsolute && s.titleContainer,
      containerStyle,
    ]}
    {...props}
  >
    {isLoading && (
      <ContentLoader
        height={dimensions.indent * 2}
        width={dimensions.indent * 30}
      >
        <Rect
          fill={colors.lightestGrey}
          x="0"
          y={dimensions.indent / 2}
          rx="4"
          ry="4"
          height={dimensions.indent * 2}
          width={dimensions.indent * 30}
        />
      </ContentLoader>
    )}
    {!isLoading && (
      <Text
        isReanimated
        style={[
          isAbsolute && s.titleAbsolute,
          !isAbsolute && s.title,
          titleStyle,
        ]}
        type="title"
        ellipsizeMode="tail"
        numberOfLines={2}
      >
        {title}
      </Text>
    )}
  </Animated.View>
);

AnimatedTitle.propTypes = {
  containerStyle: T.oneOfType([T.object, T.array]),
  titleStyle: T.object,
  isAbsolute: T.bool,
  title: T.string,
};


export default AnimatedTitle;

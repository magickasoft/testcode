import React from 'react';
import FastImage from 'react-native-fast-image';
import T from 'prop-types';
import { pure } from 'recompose';
import Animated from 'react-native-reanimated';

import s from './styles';
import { getUrl } from '../../utils/helpers/string';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

const PLACEHOLDER = 'https://rusintegrator.ru/wp-content/themes/nevia/images/shop-01.jpg';

// 2000 big
// 800 mid
// 300 thumb
// 100 preload

const Image = ({
  uri,
  defaultUri = PLACEHOLDER,
  containerStyle,
  style,
  opacity,
  onLoad,
  isLoadImageBackground,
  onLoadImageBackground,
  preloadPrefix = '_preload', // preload
  prefix = '_big', // big | mid | thumb
  resizeMode = 'cover',
  removeName = '_big',
  // onProgress,
  // onError,
  ...prop
}) => (
  <Animated.View
    style={[s.container, containerStyle]}
  >
    <AnimatedImage
      source={{ uri: defaultUri }}
      style={[s.img, style]}
      onLoad={onLoadImageBackground}
      resizeMode={resizeMode}
      {...prop}
    />
    <AnimatedImage
      source={{
        uri: getUrl(uri, preloadPrefix, removeName),
        priority: FastImage.priority.high
      }}
      style={[s.img, style]}
      resizeMode={resizeMode}
      {...prop}
    />
    <AnimatedImage
      style={[
        s.img,
        style,
        { opacity }
      ]}
      source={{
        uri: getUrl(uri, prefix, removeName),
        priority: FastImage.priority.high
      }}
      onLoad={onLoad}
        // onError={onError}
        // onProgress={onProgress}
      resizeMode={resizeMode}
      {...prop}
    />
  </Animated.View>
);

Image.propTypes = {
  isError: T.bool,
  uri: T.string,
  defaultUri: T.string,
  opacity: T.object,
  onLoad: T.func,
  // onError: T.func,
  // onProgress: T.func,
  containerStyle: T.any,
  style: T.any,
  preloadPrefix: T.string,
  prefix: T.string,
  resizeMode: T.oneOf([
    'cover',
    'contain'
  ]),
  isLoadImageBackground: T.bool,
  onLoadImageBackground: T.func,
  removeName: T.string,
};

export default pure(Image);

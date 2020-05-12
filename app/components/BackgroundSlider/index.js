import T from 'prop-types';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, ViewPropTypes } from 'react-native';
import Animated from 'react-native-reanimated';
import { pure } from 'recompose';
import R from 'ramda';

import { dimensions } from '../../styles';
import s from './styles';
import Image from '../Image';

// eslint-disable-next-line
const renderItem = (height, imageStyle, pickProp) => ({ item, index }) => {
  const uri = R.is(Object, item) ? item[pickProp] : item;

  return (
    <Image
      key={`${item}-${index}`}
      uri={uri}
      containerStyle={[{
        width: dimensions.windowWidth,
        height: height * 1.2
      }, imageStyle]}
    />
  );
};

const BackgroundSlider = ({
  containerStyle,
  imageStyle,
  carouselStyle,
  height,
  uris,
  pickProp
}) => (
  <Animated.View style={[s.root, containerStyle, { height }]}>
    <View style={[s.svgContainer, { height }]}>
      <Animated.View style={[s.carouselContainer, carouselStyle]}>
        <Carousel
          data={uris}
          renderItem={renderItem(height, imageStyle, pickProp)}
          sliderWidth={dimensions.windowWidth}
          itemWidth={dimensions.windowWidth}
          autoplay
          autoplayDelay={1000}
          autoplayInterval={5000}
          loop
        />
      </Animated.View>
    </View>
  </Animated.View>
);

BackgroundSlider.propTypes = {
  carouselStyle: T.any,
  containerStyle: T.object,
  height: T.number.isRequired,
  imageStyle: ViewPropTypes.style,
  pickProp: T.string,
  uris: T.oneOfType([T.arrayOf(T.string), T.arrayOf(T.object)])
};

export default pure(BackgroundSlider);

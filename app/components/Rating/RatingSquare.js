import React from 'react';
import T from 'prop-types';
import { ViewPropTypes, View, TouchableOpacity } from 'react-native';
import { pure } from 'recompose';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import FastImage from 'react-native-fast-image';

import s from './styles';
import HeartSingle from './HeartSingle';
import heartsColor from '../../assets/images/rating_color_x5.png';

const stars = [0, 1, 2, 3, 4];

const RatingSquare = ({
  containerStyle,
  rating,
  size,
  onPress,
  theme: { colors }
}) => (
  <View style={[s.stars, containerStyle]}>
    {rating === 5 && (
      <FastImage
        resizeMode={FastImage.resizeMode.stretch}
        style={[
          s.ratingColorImage,
          {
            height: size * 2,
            width: size * 2 * 5.15
          }
        ]}
        source={heartsColor}
      />
    )}
    {stars.map((el) => (
      <TouchableOpacity
        key={el}
        onPress={() => {
          ReactNativeHapticFeedback.trigger('impactHeavy');
          onPress(el + 1);
        }}
      >
        {console.log(size * 2, size * 2 * 5.5)}
        <HeartSingle
          fill={rating === 5 ? 'transparent' : Math.round(rating) > el ? colors.activePrimary : null}
          size={size * 2}
          marginRight={el === 4 ? 0 : 2.2}
        />
      </TouchableOpacity>
    ))}
  </View>
);


RatingSquare.propTypes = {
  containerStyle: ViewPropTypes.style,
  onPress: T.func,
  rating: T.number,
  size: T.number,
  theme: T.object
};

export default pure(RatingSquare);

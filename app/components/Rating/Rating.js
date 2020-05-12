import React from 'react';
import T from 'prop-types';
import { ViewPropTypes, View, Image } from 'react-native';
import { pure } from 'recompose';
import { dimensions } from '@styles';
import s from './styles';
import heartsColor from '../../assets/images/rating_color.png';
import HeartsRating from './HeartsRating';

const Rating = ({
  children,
  containerStyle,
  rating,
  size = dimensions.indent * 2,
  theme: { colors }
}) => (
  <View style={containerStyle}>
    <View style={s.stars}>
      {rating > 4.5 ? (
        <Image
          style={{ height: size, width: size * 5.5 }}
          source={heartsColor}
        />
      ) : (
        <HeartsRating
          fill={colors.activePrimary}
          rating={rating}
        />
      )}
    </View>
    {children}
  </View>
);

Rating.propTypes = {
  children: T.node,
  containerStyle: ViewPropTypes.style,
  rating: T.number,
  size: T.number,
  theme: T.object
};

export default pure(Rating);

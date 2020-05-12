import React from 'react';
import T from 'prop-types';
import { ViewPropTypes, View } from 'react-native';
import { pure } from 'recompose';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { IconVector } from '@components';
import s from './styles';

const stars = [0, 1, 2, 3, 4];

const RatingSquare = ({
  containerStyle,
  rating,
  size,
  onPress,
  theme: { colors }
}) => (
  <View style={[s.stars, containerStyle]}>
    {stars.map((el) => (
      <IconVector
        key={el}
        name={Math.round(rating) > el ? 'heart' : 'heart-o'}
        type="FontAwesome"
        size={size * 1.5}
        color={colors.activePrimary}
        onPress={() => {
          ReactNativeHapticFeedback.trigger('impactHeavy');
          onPress(el + 1);
        }}
        containerStyle={s.heartEmpty}
      />
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

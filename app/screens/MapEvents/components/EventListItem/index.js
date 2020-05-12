import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import { pure } from 'recompose';
import R from 'ramda';

import { validURL } from '@utils/helpers/string';
import { Touchable, Text } from '@components';
import s from './style';

const PLACEHOLDER_PLACE = 'https://rusintegrator.ru/wp-content/themes/nevia/images/shop-01.jpg';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

const EventListItem = ({ onGoToEvent, item, itemHeight }) => (
  <Touchable
    style={[s.itemContainer, { height: itemHeight }]}
    onPress={() => onGoToEvent(R.pathOr(null, ['id'], item))}
  >
    <View style={s.imgContainer}>
      <AnimatedImage
        style={s.img}
        source={{ uri: PLACEHOLDER_PLACE }}
      />
      {validURL(item.image) && (
        <AnimatedImage
          style={s.img}
          source={{ uri: item.image, priority: FastImage.priority.high }}
        />
      )}
    </View>
    <View style={s.content}>
      <View style={s.contentHeader}>
        <Text style={s.title} numberOfLines={1}>{R.pathOr(null, ['title'], item)}</Text>
      </View>
      <View style={s.contentCenter}>
        <Text type="reviews" style={s.reviews}>
          {item.address ? item.address.split(',')[0] : ''}
        </Text>
      </View>
    </View>
  </Touchable>
);

EventListItem.propTypes = {
  item: T.object,
  itemHeight: T.number,
  onGoToEvent: T.func
};


export default pure(EventListItem);

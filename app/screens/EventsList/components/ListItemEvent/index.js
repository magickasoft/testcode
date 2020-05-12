import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import { pure, compose } from 'recompose';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import { withTheme, withLocale } from '@utils/enhancers';
import { date } from '@utils/helpers';
import { validURL } from '@utils/helpers/string';
import { Text } from '@components';
import { platform, postEventStatus } from '@constants';
import style from './style';

const PLACEHOLDER_PLACE = 'https://rusintegrator.ru/wp-content/themes/nevia/images/shop-01.jpg';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

const ListItemEvent = ({
  item,
  toEvent,
  toCreateEvent,
  theme: { s }
}) => {
  const now = new Date();
  const [hours, minutes, seconds] = item.event_time ? item.event_time.split(':') : [];
  const time = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), hours, minutes, seconds);
  const eTime = item.event_time ? date.toFormat(time, date.time) : '';
  const eDate = item.event_date ? `${date.toFormatMessageFuture(Number(item.event_date))}, ` : '';
  const isDraft = item.status === postEventStatus.IS_DRAFT;
  const handlePress = isDraft ? toCreateEvent : toEvent(item.id);

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={platform.android ? 1 : 0.5}>
      <View style={s.container}>
        <View style={s.image}>
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
          {isDraft && (
            <View style={s.draft}>
              <Text style={s.draftText}>Draft</Text>
            </View>
          )}
        </View>
        <View style={s.content}>
          <View style={s.left}>
            <Text ellipsizeMode="tail" numberOfLines={2} style={s.date}>
              {`${eDate}${eTime}`}
            </Text>
            <Text ellipsizeMode="tail" numberOfLines={2} style={s.title}>
              {item.title}
            </Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={s.address}>
              {item.address ? item.address.split(',')[0] : ''}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItemEvent.propTypes = {
  item: T.object,
  theme: T.object,
  toCreateEvent: T.func,
  toEvent: T.func
};

export default compose(
  withLocale(),
  pure,
  withTheme(style),
)(ListItemEvent);

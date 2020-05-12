import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';

import {
  IconVector,
  Text,
  Container,
  Touchable,
  CustomHeader
} from '@components';
import { colors } from '@styles';
import { createScreen } from '@navigation';
import { screens } from '@constants';

import s from './styles';

const icons = {
  close: {
    type: 'Ionicons',
    name: 'md-close',
    size: 26,
    color: colors.white
  },
  closeSecond: {
    type: 'EvilIcons',
    name: 'close',
    size: 26,
    color: 'red',
    containerStyle: s.iconContainer
  },
  search: {
    type: 'EvilIcons',
    name: 'search',
    size: 26,
    color: colors.gray,
    containerStyle: s.iconContainer
  },
  exclamation: {
    type: 'MaterialCommunityIcons',
    name: 'exclamation',
    size: 26,
    color: colors.gray,
    containerStyle: s.iconContainer
  }
};

const ModalHideLocationItem = ({
  places,
  item,
  onGoToMorePlaces,
  onDontCheckIn,
  onClose,
  onPressItem,
  onRemoveFromTimeLine
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={{ icon: 'close', color: colors.white, onPress: onClose }}
      backgroundColor={colors.transparent}
    />
    <View style={s.container}>
      <View style={s.titleContainer}>
        <Text type="h1" color={colors.white}>
          Not at {R.pathOr('', ['title'], item)}
        </Text>
        <Text color={colors.white}>
          Were you at one of these places ?
        </Text>
      </View>
      <View style={s.places}>
        {places.map((el) => (
          <Touchable
            key={el.id}
            style={s.placeItem}
            onPress={() => onPressItem(el)}
          >
            <Text
              type="h2"
              numberOfLines={1}
              color={colors.black}
            >
              {R.pathOr('No name', ['title'], el)}
            </Text>
          </Touchable>
        ))}
      </View>
      { [{
        icon: icons.search,
        onPress: onGoToMorePlaces,
        text: 'See more places near here',
        color: null
      }, {
        icon: icons.exclamation,
        onPress: onDontCheckIn,
        text: 'I was here, but don\'t check me in',
        color: colors.activePrimary
      }, {
        icon: icons.closeSecond,
        onPress: onRemoveFromTimeLine,
        text: 'No, remove from my timeline',
        color: 'red'
      }].map((el) => (
        <Touchable key={el.text} onPress={el.onPress} style={s.button}>
          <IconVector {...el.icon} color={el.color} />
          <View style={s.textContainer}>
            <Text style={{ color: el.color }}>
              {el.text}
            </Text>
          </View>
        </Touchable>
      ))}
    </View>
  </Container>
);

ModalHideLocationItem.propTypes = {
  item: T.object,
  onClose: T.func,
  onDontCheckIn: T.func,
  onGoToMorePlaces: T.func,
  onPressItem: T.func,
  onRemoveFromTimeLine: T.func,
  places: T.array
};

export default createScreen(ModalHideLocationItem, screens.ModalHideLocationItem);

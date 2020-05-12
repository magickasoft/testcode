import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import * as dateFns from 'date-fns';

import { Swipeable, Text } from '@components';
import { Avatar } from '@containers';
import { colors } from '@styles';

import s from './styles';

const itemWidth = 100;

const DialogPreview = ({
  item: {
    id,
    photo,
    fullName,
    lastonline_ts,
    vip_until,
    vipSettings,
  },
  item,
  itemHeight,
  onSwipeablePress,
}) => {
  const items = [{
    text: I18n.t('swipeable.unblock'),
    color: colors.yellow,
    icon: {
      type: 'MaterialCommunityIcons',
      name: 'lock-open',
      color: '#fff',
      size: 30,
    },
  }];
  return (
    <Swipeable
      items={items}
      itemWidth={itemWidth}
      onItemPress={onSwipeablePress(item)}
    >
      <View style={[s.dataWrapper, { height: itemHeight }]}>
        <View style={s.avatarWrapper}>
          <Avatar
            id={id}
            uri={photo}
            containerStyle={s.avatarImg}
            lastonline_ts={lastonline_ts}
            isOnline={!(dateFns.isAfter(new Date(vip_until * 1000), new Date()) &&
              vipSettings && vipSettings.v_invisible === '1')}
          />
        </View>
        <View style={s.nameWrapper}>
          <Text style={s.h1} ellipsizeMode="tail" numberOfLines={1}>
            {fullName.trim()}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

DialogPreview.propTypes = {
  item: T.shape({
    id: T.number,
    photo: T.string,
    fullName: T.string,
    lastonline_ts: T.number,
    vip_until: T.number,
    vipSettings: T.oneOfType([T.string, T.object]),
  }),
  itemHeight: T.number,
  onSwipeablePress: T.func,
};

export default DialogPreview;

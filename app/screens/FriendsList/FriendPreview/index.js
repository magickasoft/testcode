import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as dateFns from 'date-fns';

import { Text } from '@components';
import { Avatar } from '@containers';

import s from './styles';

const FriendPreview = ({
  item: {
    id,
    photo,
    fullName,
    lastonline_ts,
    vip_until,
    vipSettings,
  },
  itemHeight,
  toProfile,
}) => (
  <RectButton
    onPress={toProfile(id)}
    style={s.itemWrapper}
  >
    <View style={[s.dataWrapper, { height: itemHeight }]}>
      <View style={s.avatarWrapper}>
        <Avatar
          id={id}
          uri={photo}
          containerStyle={s.avatarImg}
          isOnline={!(dateFns.isAfter(new Date(vip_until * 1000), new Date()) &&
            vipSettings && vipSettings.v_invisible === '1')}
          lastonline_ts={lastonline_ts}
        />
      </View>
      <View style={s.nameWrapper}>
        <Text style={s.h1} ellipsizeMode="tail" numberOfLines={1}>
          {fullName.trim()}
        </Text>
      </View>
    </View>
  </RectButton>
);

FriendPreview.propTypes = {
  item: T.shape({
    id: T.number,
    photo: T.string,
    fullName: T.string,
    lastonline_ts: T.number,
    vip_until: T.number,
    vipSettings: T.oneOfType([T.string, T.object]),
  }),
  itemHeight: T.number,
  toProfile: T.func,
};

export default FriendPreview;

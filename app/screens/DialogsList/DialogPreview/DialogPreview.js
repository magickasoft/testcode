import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { isAfter, format } from 'date-fns';

import { date } from '@utils/helpers';
import Icon from '../../../components/IconVector';
import { Text } from '../../../components';
import s from './styles';
import { Avatar } from '../../../containers';

const DialogPreview = ({
  onPress,
  profileId,
  message,
  photo,
  fullName,
  created_ts,
  itemHeight,
  isRead,
  lastonline_ts,
  unreadMessages,
  vip_until,
  vipSettings,
}) => (
  <TouchableHighlight onPress={() => onPress(profileId)}>
    <View style={s.itemWrapper}>
      <View style={[s.dataWrapper, { height: itemHeight }]}>
        <View style={s.avatarWrapper}>
          <Avatar
            id={profileId}
            uri={photo}
            containerStyle={s.avatarImg}
            lastonline_ts={lastonline_ts}
            isOnline={!(isAfter(new Date(vip_until * 1000), new Date()) &&
              vipSettings && vipSettings.v_invisible === '1')}
          />
        </View>
        <View style={s.nameWrapper}>
          <Text style={s.h1} ellipsizeMode="tail" numberOfLines={1}>
            {fullName.trim()}
          </Text>
          <Text style={s.p2} ellipsizeMode="tail" numberOfLines={2}>
            {message}
          </Text>
        </View>
      </View>
      <View style={s.rightContainer}>
        <View style={s.date}>
          {!!created_ts && (
            <Text style={s.p}>
              {format(new Date(created_ts * 1000), date.monthDay)}
            </Text>
          )}
        </View>
        <View style={s.readIndicator}>
          {!!unreadMessages && (
            <View style={s.unreadMessagesContainer}>
              <Text style={s.unreadMessagesText}>{unreadMessages}</Text>
            </View>
          )}
          {(isRead && !unreadMessages) && <Icon
            type="MaterialCommunityIcons"
            name="check"
            style={s.readIndicatorIcon}
          />}
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

DialogPreview.propTypes = {
  onPress: PropTypes.func.isRequired,
  profileId: PropTypes.number.isRequired,
  message: PropTypes.string,
  photo: PropTypes.string,
  fullName: PropTypes.string,
  created_ts: PropTypes.number,
  lastonline_ts: PropTypes.number,
  itemHeight: PropTypes.number,
  isRead: PropTypes.bool,
  unreadMessages: PropTypes.number,
  vip_until: PropTypes.number,
  vipSettings: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default DialogPreview;

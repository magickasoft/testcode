import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import * as dateFns from 'date-fns';

import s from './styles';
import { Avatar } from '../../../../containers';
import { Text } from '../../../../components';

const UserListItem = ({
  onPress,
  profile_id,
  photo,
  fullName,
  lastonline_ts,
  itemHeight,
  vip_until,
  vipSettings,
}) => (
  <TouchableOpacity
    onPress={() => onPress(profile_id)}
    style={[s.itemWrapper, { height: itemHeight }]}
  >
    <View style={s.dataWrapper}>
      <View style={s.avatarWrapper}>
        <Avatar
          id={profile_id}
          uri={photo}
          containerStyle={s.avatarImg}
          lastonline_ts={lastonline_ts}
          isOnline={!(dateFns.isAfter(new Date(vip_until * 1000), new Date()) &&
            vipSettings && vipSettings.v_invisible === '1')}
        />
      </View>
      <View style={s.nameWrapper}>
        <Text style={s.h1}>{fullName.trim()}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

UserListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  profile_id: PropTypes.number.isRequired,
  photo: PropTypes.string,
  fullName: PropTypes.string,
  lastonline_ts: PropTypes.number,
  itemHeight: PropTypes.number,
  vip_until: PropTypes.number,
  vipSettings: PropTypes.object,
};

export default UserListItem;

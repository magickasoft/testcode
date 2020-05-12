import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { isAfter } from 'date-fns';

import { profileHelpers } from '@utils/helpers';

import { Text, Touchable } from '../../../components';
import { Avatar } from '../../../containers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 1,
    marginHorizontal: 7,
  },
});

const LeftHeader = ({ interlocutor, onPressAvatar, isBot }) => {
  if (!interlocutor) return null;
  const onPress = isBot ? null : onPressAvatar;
  const lastVisit = isAfter(new Date(interlocutor.vip_until * 1000), new Date())
  && interlocutor.vipSettings && interlocutor.vipSettings.v_invisible === '1'
    ? 'VIP'
    : profileHelpers.getTextOnlineStatus(interlocutor.lastonline_ts);
  return (
    <Touchable onPress={onPress} style={styles.container}>
      <Avatar
        uri={interlocutor.photo}
        size="small"
        containerStyle={styles.avatar}
      />
      <View>
        <Text
          type="h1"
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {`${interlocutor.fullName}`}
        </Text>
        {!isBot && (
          <Text
            type="date"
            style={styles.name}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {lastVisit}
          </Text>
        )}
      </View>
    </Touchable>
  );
};

LeftHeader.propTypes = {
  onPressAvatar: PropTypes.func,
  interlocutor: PropTypes.object,
  isBot: PropTypes.bool,
};

export default LeftHeader;

/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import s from './styles';
import { Avatar } from '../../../../containers';
import { date } from '@utils/helpers';
import styles from '../../../DialogsList/DialogPreview/styles';
import { Text } from '../../../../components';
import * as dateFns from 'date-fns';

const ListItem = ({
  onPress,
  profile_id,
  photo,
  fullName,
  // online,
  itemHeight,
  time,
}) => {
  const [firstName = ' ', lastName = ' '] = (fullName || '').split(' ');
  return (
    <TouchableOpacity
      onPress={() => onPress(profile_id, fullName)}
      style={[s.itemWrapper, { height: itemHeight }]}
    >
      <View style={s.dataWrapper}>
        {photo ? (
          <View style={s.avatarWrapper}>
            <Avatar
              id={profile_id}
              uri={photo}
              containerStyle={s.avatarImg}
            />
            {/* { online && <View style={s.onlineIndicator} /> } */}
          </View>
        ) : (
          <View style={s.avatarWrapper}>
            <Text style={s.h1}>{firstName.charAt(0)}</Text>
            <Text style={s.h1}>{lastName.charAt(0)}</Text>
            {/* { online && <View style={s.onlineIndicator} /> } */}
          </View>
        )}
        <View style={s.nameWrapper}>
          <Text style={s.h1}>{fullName.trim()}</Text>
          {!!time && (
            <Text style={styles.p}>
              {dateFns.format(new Date(time * 1000), `MMM d, yyyy, ${date.timeFormat()}`)}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  onPress: PropTypes.func,
  profile_id: PropTypes.number.isRequired,
  photo: PropTypes.string,
  fullName: PropTypes.string,
  // online: PropTypes.bool,
  itemHeight: PropTypes.number,
  time: PropTypes.number,
};

export default ListItem;

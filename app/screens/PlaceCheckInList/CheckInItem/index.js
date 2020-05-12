import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import FastImage from 'react-native-fast-image';
import R from 'ramda';

import { Text } from '@components';
import { date } from '@utils/helpers';

import s from './styles';

const defaultImage = 'https://communitya-mainstorage.s3.us-east-2.amazonaws.com/uploads/temp/hs/mu/er/5d10b7612b509_big.jpg'; // eslint-disable-line
const getName = R.propOr('Private', 'fullName');
const getPhoto = R.propOr(defaultImage, 'photo');

const CheckInItem = ({ profile, created_ts }) => (
  <View style={s.container}>
    <FastImage source={{ uri: getPhoto(profile) }} style={s.avatar} />
    <View style={s.infoBlock}>
      <Text style={s.name}>{getName(profile)}</Text>
      <Text style={s.time}>
        {date.toFormatMessage(created_ts)}
      </Text>
    </View>
  </View>
);

CheckInItem.propTypes = {
  profile: T.object,
  created_ts: T.number,
};

export default CheckInItem;

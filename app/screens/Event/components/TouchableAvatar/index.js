import React from 'react';
import T from 'prop-types';
import FastImage from 'react-native-fast-image';
import { Avatar } from '@components';

const PLACEHOLDER_PLACE = require('../../../../assets/images/image_placeholder.png');

const TouchableAvatar = ({ photo, onPress, id }) => (
  <Avatar
    key={id}
    onPress={() => onPress(id)}
    source={photo ? { uri: photo, priority: FastImage.priority.high } : PLACEHOLDER_PLACE}
  />
);

TouchableAvatar.propTypes = {
  id: T.number,
  onPress: T.func,
  photo: T.string
};

export default TouchableAvatar;

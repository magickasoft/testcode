import React from 'react';
import { View } from 'react-native';

import s from './style';
import {
  Text
} from '../../../../components';


const BlockedProfile = () => (
  <View style={s.blockedUserContainer}>
    <Text>They have blocked you and you cannot contact them and browse their albums. Sorry!</Text>
  </View>
);

export default BlockedProfile;

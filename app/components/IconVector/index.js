/* eslint-disable */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import T from 'prop-types';
import { createIconSetFromIcoMoon, createIconSetFromFontello } from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather'

import icoMoonConfig from '../../assets/icons/selection';
import icoMoonTabConfig from '../../assets/icons/selectionTab';
import Touchable from '../Touchable';

export const IconCustom = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf'
);
export const IconTab = createIconSetFromIcoMoon(
  icoMoonTabConfig,
  'icomoonTab',
  'icomoonTab.ttf'
);

const icons = {
  'MaterialCommunityIcons': MaterialCommunityIcons,
  'Ionicons': Ionicons,
  'Feather': Feather,
  'MaterialIcons': MaterialIcons,
  'Entypo': Entypo,
  'SimpleLineIcons': SimpleLineIcons,
  'EvilIcons': EvilIcons,
  'IconCustom': IconCustom,
  'IconTab': IconTab,
  'FontAwesome': FontAwesome,
};

const IconVector = ({
  isAnimated = false,
  containerStyle,
  backgroundColor,
  onPress,
  type = 'MaterialCommunityIcons',
  ...props
}) => {
  const Icon = isAnimated
    ? Animated.createAnimatedComponent(icons[type])
    : icons[type];

  const Container = onPress ? Touchable : View;

  return (
    <Container
     style={[
       containerStyle,
       backgroundColor && { backgroundColor },
     ]}
     onPress={onPress}
    >
      <Icon {...props} />
    </Container>
  );
};

IconVector.propTypes = {
  type: T.oneOf([
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'Ionicons',
    'MaterialIcons',
    'MaterialCommunityIcons',
    'SimpleLineIcons',
    'IconCustom',
    'IconTab'
  ]),
};

export default IconVector;

import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { pure } from 'recompose';

import { colors } from '@styles';
import {
  Touchable,
  Instagram,
  IconVector,
  Container,
  Text,
  CustomHeader,
  BackBtn,
} from '@components';
import { screens } from '@constants';
import { createScreen } from '@navigation';
import s, { ICON_SIZE } from './style';

const icons = {
  phone: {
    type: 'FontAwesome',
    size: ICON_SIZE * 0.5,
    name: 'phone',
    color: colors.white,
    containerStyle: s.icon,
    backgroundColor: colors.green,
  },
  facebook: {
    type: 'MaterialCommunityIcons',
    size: ICON_SIZE * 0.5,
    color: colors.white,
    name: 'facebook',
    containerStyle: s.icon,
    backgroundColor: colors.facebook,
  },
  google: {
    type: 'FontAwesome',
    size: ICON_SIZE * 0.5,
    name: 'google',
    color: colors.white,
    containerStyle: s.icon,
    backgroundColor: colors.google,
  },
  instagram: {
    type: 'FontAwesome',
    size: ICON_SIZE * 0.5,
    name: 'instagram',
    color: colors.white,
    containerStyle: s.icon,
    backgroundColor: colors.instagram,
  },
  twitter: {
    type: 'FontAwesome',
    size: ICON_SIZE * 0.5,
    name: 'twitter',
    color: colors.white,
    containerStyle: s.icon,
    backgroundColor: colors.twitter,
  },
  arrowRight: {
    type: 'SimpleLineIcons',
    size: ICON_SIZE * 0.4,
    name: 'arrow-right',
    color: colors.inert,
  },
};

const ListItem = ({ title, subTitle, icon, onPress, onConnect }) => ( // eslint-disable-line
  <Touchable style={s.itemContainer} onPress={subTitle ? onPress : onConnect}>
    <IconVector
      {...icon}
      backgroundColor={subTitle ? icon.backgroundColor : colors.lightestGrey}
    />
    <View style={s.itemContent}>
      <Text style={s.title}>{title}</Text>
      {subTitle
       ? (<Text style={s.subTitle}>{subTitle}</Text>)
       : (<Text style={s.connect}>Connect</Text>)
       }
    </View>
    { !!subTitle && (<IconVector {...icons.arrowRight} />)}
  </Touchable>
);

const PureListItem = pure(ListItem);

const ProfileVerification = ({
  soc: {
    // phone,
    facebook,
    google,
    instagram,
    twitter,
  },
  onConnectGoogle,
  onConnectFacebook,
  onConnectInstagram,
  onLoginSuccessInstagram,
  setRefInstagram,
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn color={colors.white} />}
      backgroundColor={colors.purple}
      centerComponent={{
        style: { color: colors.white },
        text: 'Profile verification',
      }}
    />
    <Container style={s.contentContainer}>
      <Text type="title">Social accounts</Text>
      {[
        /* {
        icon: icons.phone,
        title: 'Phone number',
        subTitle: phone,
        onPress: () => null,
        onConnect: () => null,
      }, */
       {
        icon: icons.facebook,
        title: 'Facebook',
        subTitle: facebook,
        onPress: () => null,
        onConnect: onConnectFacebook,
      }, {
        icon: icons.google,
        title: 'Google',
        subTitle: google,
        onPress: () => null,
        onConnect: onConnectGoogle,
      }, {
        icon: icons.instagram,
        title: 'Instagram',
        subTitle: instagram,
        onPress: () => null,
        onConnect: onConnectInstagram,
      }, {
        icon: icons.twitter,
        title: 'Twitter',
        subTitle: twitter,
        onPress: () => null,
        onConnect: () => null,
      }].map(el => <PureListItem {...el} key={el.title} />)}
    </Container>
    <Instagram
      refInstagram={setRefInstagram}
      onLoginSuccess={onLoginSuccessInstagram}
    />
  </Container>
);

ProfileVerification.propTypes = {
  soc: T.shape({
    phone: T.string,
    facebook: T.string,
    google: T.string,
    instagram: T.string,
    twitter: T.string,
  }),
  onConnectGoogle: T.func,
  onConnectFacebook: T.func,
  onConnectInstagram: T.func,
  onLoginSuccessInstagram: T.func,
  setRefInstagram: T.func,
};

export default createScreen(ProfileVerification, screens.ProfileVerification);

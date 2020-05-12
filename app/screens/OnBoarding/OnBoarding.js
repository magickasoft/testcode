import React from 'react';
import { View, Image } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';

import { scalingUtils } from '../../styles';
import { Container, Button, Separator, TextNew } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const logo = require('../../assets/images/spec.png');

const getIcons = ({ colors, s }) => ({ // eslint-disable-line
  facebook: {
    type: 'Ionicons',
    size: scalingUtils.verticalScale(22),
    color: colors.white,
    name: 'logo-facebook',
    containerStyle: s.icon,
  },
  google: {
    type: 'FontAwesome',
    size: scalingUtils.scale(21),
    name: 'google',
    color: colors.darkBlue,
    containerStyle: s.icon,
  },
});

const OnBoarding = ({
  onSignInWithFacebook,
  onSignInWithGoogle,
  onGoToSignInWithEmail,
  onGoToSignUp,
  onOpenTermOfUse,
  onOpenPrivacyPolicy,
  theme: {
    s,
    colors,
  },
}) => {
  const icons = getIcons({ s, colors });

  return (
    <Container style={s.container}>
      <View style={s.logoContainer}>
        <Image
          source={logo}
          style={s.logo}
        />
      </View>
      <View style={s.contentContainer}>
        <Button
          type="auth"
          icon={icons.facebook}
          title={I18n.t('on_boarding.withFacebook')}
          onPress={onSignInWithFacebook}
          backgroundColor={colors.facebook}
        />
        <Button
          type="auth"
          icon={icons.google}
          title={I18n.t('on_boarding.withGoogle')}
          onPress={onSignInWithGoogle}
          backgroundColor={colors.white}
          color={colors.darkBlue}
        />
        <View style={s.separatorContainer}>
          <Separator style={s.separator} />
          <TextNew style={s.textSeparator}>{I18n.t('on_boarding.or')}</TextNew>
          <Separator style={s.separator} />
        </View>
        <Button
          type="auth"
          title={I18n.t('on_boarding.withEmail')}
          onPress={onGoToSignInWithEmail}
        />
        <TextNew
          type="reviews"
          style={s.text}
          onPress={onGoToSignUp}
        >
          {I18n.t('on_boarding.dont_have_account')}{' '}
          <TextNew color={colors.purpleLight}>{I18n.t('on_boarding.signUp')}</TextNew>
        </TextNew>
      </View>
      <View style={s.privacyContainer}>
        <TextNew
          type="reviews"
          style={s.text}
        >
          {I18n.t('on_boarding.term_first')}{' '}
          <TextNew
            type="link"
            onPress={onOpenTermOfUse}
          >
            {I18n.t('on_boarding.term_of_use')},{' '}
          </TextNew>
          <TextNew
            type="link"
            onPress={onOpenTermOfUse}
          >
            {I18n.t('on_boarding.nondiscremination')}
          </TextNew>
          {I18n.t('on_boarding.term_last')}{' '}
          <TextNew
            type="link"
            onPress={onOpenPrivacyPolicy}
          >
            {I18n.t('on_boarding.privacy')}
          </TextNew>
        </TextNew>
      </View>
    </Container>
  );
};

OnBoarding.propTypes = {
  onSignInWithFacebook: T.func,
  onSignInWithGoogle: T.func,
  onGoToSignInWithEmail: T.func,
  onGoToSignUp: T.func,
  onOpenTermOfUse: T.func,
  onOpenPrivacyPolicy: T.func,
  theme: T.object,
};

export default createScreen(OnBoarding, screens.OnBoarding);

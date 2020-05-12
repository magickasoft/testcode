import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import I18n from 'react-native-i18n';

import {
  ButtonRound,
  Button,
  Text,
  IconVector,
  Switch,
  Container,
} from '@components';
import styles, { scalingUtils } from '@styles';
import { screens } from '@constants';
import { createScreen } from '@navigation';

const getIcons = colors => ({
  shape: {
    name: 'check',
    size: scalingUtils.scale(32),
    color: colors.activeSecondary,
  },
  facebook: {
    name: 'facebook',
    size: scalingUtils.verticalScale(23),
    color: colors.white,
  },
  twitter: {
    name: 'twitter',
    size: scalingUtils.verticalScale(25),
    color: colors.white,
  },
});

const SpotsPollSubmitted = ({
  onDone,
  onToggleShareTwitter,
  onToggleShareFacebook,
  shareFacebook,
  shareTwitter,
  theme: {
    s,
    colors,
  },
}) => {
  const icons = getIcons(colors);

  return (
    <Container style={[styles.fillAll, s.root]}>
      <ButtonRound
        shadow={false}
        typeTitle="center"
        icon={icons.shape}
        titleStyle={s.titleStyle}
        containerStyle={[s.button, s.shadow]}
      />
      <View style={s.textContainer}>
        <Text type="titleNavBar" style={s.textSubmitted}>Submitted.</Text>
      </View>
      <Button
        containerStyle={s.doneContainerStyle}
        titleStyle={s.doneStyle}
        title={I18n.t('spot_poll_submitted.done')}
        onPress={onDone}
      />
      <Text style={s.textShare}>Share with your friends !</Text>
      <View style={s.shareContainer}>
        <View style={s.shareContainerSecond}>
          <View style={[s.iconContainerStyle, s.facebookContainerStyle]}>
            <IconVector {...icons.facebook} />
          </View>
          <Text type="name">on Facebook</Text>
          <Switch
            backgroundActive={colors.activePrimary}
            value={shareFacebook}
            onValueChange={onToggleShareFacebook}
          />
        </View>
        <View style={s.shareContainerSecond}>
          <View style={[s.iconContainerStyle, s.twitterContainerStyle]}>
            <IconVector {...icons.twitter} />
          </View>
          <Text type="name">on Twitter</Text>
          <Switch
            backgroundActive={colors.activePrimary}
            value={shareTwitter}
            onValueChange={onToggleShareTwitter}
          />
        </View>
      </View>
    </Container>
  );
};

SpotsPollSubmitted.propTypes = {
  onDone: T.func,
  onToggleShareTwitter: T.func,
  onToggleShareFacebook: T.func,
  shareFacebook: T.bool,
  shareTwitter: T.bool,
  theme: T.object,
};

export default createScreen(SpotsPollSubmitted, screens.SpotsPollSubmitted);

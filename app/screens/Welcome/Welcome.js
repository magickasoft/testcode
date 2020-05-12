import React from 'react';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import { Button, Text, StatusBar } from '../../components';
import styles from '../../styles';
import Theme from '../../components/Container';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const Welcome = ({
  back,
  theme: {
    s,
    colors,
  },
}) => (
  <Theme style={[styles.fillAll, s.root]}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={colors.statusBar}
    />
    <Text style={s.title}>
      {I18n.t('welcome.title')}
    </Text>
    <Text style={s.text}>
      {I18n.t('welcome.content')}
    </Text>
    <Button
      containerStyle={s.buttonWelcomeContainer}
      backgroundColor={colors.activePrimary}
      color={colors.white}
      title={I18n.t('got_it')}
      onPress={back}
    />
  </Theme>
);

Welcome.propTypes = {
  theme: T.object,
  back: T.func,
};

export default createScreen(Welcome, screens.Welcome);

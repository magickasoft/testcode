import React from 'react';
import { Animated } from 'react-native';
import I18n from 'react-native-i18n';
import T from 'prop-types';

import styles from '../../styles';
import { Button, Text, Container, CustomHeader, BackBtn } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const LocationSettings = ({
  onGoToSignSettings,
  // isLocationWork,
  // onToggleLocationWork,
  theme: {
    colors,
    s,
  },
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn color={colors.white} />}
      backgroundColor={colors.purple}
      centerComponent={{
        style: { color: colors.white },
        text: I18n.t('location.name'),
      }}
    />
    <Animated.View style={s.container}>
      {/* <View style={s.switch}>
        <Text type="name" style={s.switchText}>{I18n.t('location.switch')}</Text>
        <Switch
          value={isLocationWork}
          backgroundActive={colors.purple}
          onValueChange={onToggleLocationWork}
        />
      </View> */}
      <Text>
        {I18n.t('location.text')}
      </Text>
      <Text style={s.text2}>
        {I18n.t('location.text2')}
      </Text>
      <Button
        type="auth"
        title={I18n.t('location.button')}
        onPress={onGoToSignSettings}
        containerStyle={styles.marginVertical3x}
      />
    </Animated.View>
  </Container>
);

LocationSettings.propTypes = {
  onGoToSignSettings: T.func,
  theme: T.object,
  // isLocationWork: T.bool,
  // onToggleLocationWork: T.func,
};

export default createScreen(LocationSettings, screens.LocationSettings);

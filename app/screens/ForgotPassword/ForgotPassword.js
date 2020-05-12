import React from 'react';
import { Animated } from 'react-native';
import I18n from 'react-native-i18n';

import { withProps } from 'recompose';
import T from 'prop-types';
import styles from '../../styles';
import { Input, Button, TextNew, Container, CustomHeader, BackBtn } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const TextInput = withProps({
  autoCapitalize: 'none',
  type: 'auth',
})(Input);

const ForgotPassword = ({
  onChangeEmail,
  email,
  isReadyToSubmit,
  onSubmit,
  setIdRef,
  onGoToSignIn,
  onGoToSignUp,
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
        text: I18n.t('forgot_password.name'),
      }}
    />
    <Animated.View style={s.container}>
      <TextInput
        type="auth"
        isAnimatedPlaceholder
        id="email"
        placeholder="Email Address"
        placeholderStyle={s.placeholder}
        onChangeText={onChangeEmail}
        value={email}
        keyboardType="email-address"
        returnKeyType="next"
        blurOnSubmit={false}
        inputRef={setIdRef}
        onSubmitEditing={() => isReadyToSubmit && onSubmit()}
      />
      <Button
        type="auth"
        title={I18n.t('forgot_password.restore_password')}
        containerDisabled={s.disabled}
        onPress={onSubmit}
        disabled={!isReadyToSubmit}
        containerStyle={styles.marginVertical3x}
      />
      <TextNew type="reviews">
        {I18n.t('forgot_password.remember_password')}
        <TextNew
          type="link"
          onPress={onGoToSignIn}
        >
          {' '}{I18n.t('sign_in_with_email.name')}
        </TextNew>
      </TextNew>
      <TextNew type="reviews" style={styles.marginVerticalDouble}>
        {I18n.t('forgot_password.dont_have_account')}
        <TextNew
          type="link"
          onPress={onGoToSignUp}
        >
          {' '}{I18n.t('sign_in_with_email.sign_up')}
        </TextNew>
      </TextNew>
    </Animated.View>
  </Container>
);

ForgotPassword.propTypes = {
  email: T.string,
  isReadyToSubmit: T.bool,
  onChangeEmail: T.func,
  onSubmit: T.func,
  setIdRef: T.func,
  onGoToSignIn: T.func,
  onGoToSignUp: T.func,
  theme: T.object,
};

export default createScreen(ForgotPassword, screens.ForgotPassword);

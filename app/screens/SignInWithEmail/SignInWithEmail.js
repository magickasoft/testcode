import React from 'react';
import { View } from 'react-native';
import { withProps } from 'recompose';
import T from 'prop-types';
import I18n from 'react-native-i18n';

import { Input, Button, Container, TextNew, CustomHeader, BackBtn } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';
import styles from '../../styles';

const TextInput = withProps({
  autoCapitalize: 'none',
  type: 'auth',
})(Input);

const SignInWithEmail = ({
  onChangeEmail,
  email,
  password,
  onChangePassword,
  isReadyToSubmit,
  onSubmit,
  onForgotPassword,
  onGoToSignUp,
  getRef,
  getError,
  setIdRef,
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
        text: I18n.t('sign_in_with_email.name'),
      }}
    />
    <View style={s.container} keyboardShouldPersistTaps="always">
      <TextInput
        type="auth"
        id="email"
        isAnimatedPlaceholder
        placeholderStyle={s.placeholder}
        placeholder="Email Address"
        onChangeText={onChangeEmail}
        value={email}
        keyboardType="email-address"
        returnKeyType="next"
        visibleLabel={!!email}
        inputRef={setIdRef}
        blurOnSubmit={false}
        onSubmitEditing={() => getRef('password').focus()}
      />
      <TextInput
        type="auth"
        id="password"
        isAnimatedPlaceholder
        placeholder="Password"
        placeholderStyle={s.placeholder}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry
        visibleLabel={!!password}
        returnKeyType="done"
        inputRef={setIdRef}
        onSubmitEditing={() => isReadyToSubmit && onSubmit()}
        containerStyle={styles.marginBottom}
      />
      {!!getError('auth') &&
      <TextNew type="err" marginLeft={10} >{getError('auth')}</TextNew>
      }
      <Button
        type="auth"
        title={I18n.t('sign_in_with_email.name')}
        containerDisabled={s.disabled}
        onPress={onSubmit}
        disabled={!isReadyToSubmit}
        containerStyle={styles.marginVertical3x}
      />
      <TextNew
        type="link"
        onPress={onForgotPassword}
      >
        {I18n.t('sign_in_with_email.forgot_password')}
      </TextNew>
      <TextNew type="reviews" style={styles.marginVerticalDouble}>
        {I18n.t('sign_in_with_email.dont_have_account')}
        <TextNew
          type="link"
          onPress={onGoToSignUp}
        >
          {' '}{I18n.t('sign_in_with_email.sign_up')}
        </TextNew>
      </TextNew>
    </View>
  </Container>
);

SignInWithEmail.propTypes = {
  getRef: T.func,
  getError: T.func,
  email: T.string,
  password: T.string,
  isReadyToSubmit: T.bool,
  onChangeEmail: T.func,
  onChangePassword: T.func,
  onForgotPassword: T.func,
  onGoToSignUp: T.func,
  onSubmit: T.func,
  setIdRef: T.func,
  theme: T.object,
};

export default createScreen(SignInWithEmail, screens.SignInWithEmail);

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

const SignUp = ({
  onChangeEmail,
  email,
  onChangePassword,
  password,
  isLink,
  isReadyToSubmit,
  onSubmit,
  getRef,
  setIdRef,
  onGoToSignIn,
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
        text: I18n.t('sign_up.name'),
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
        onSubmitEditing={() => getRef('password').focus()}
      />
      <TextInput
        type="auth"
        isAnimatedPlaceholder
        id="password"
        placeholder="Password"
        placeholderStyle={s.placeholder}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry
        returnKeyType="done"
        inputRef={setIdRef}
        onSubmitEditing={() => isReadyToSubmit && onSubmit()}
      />
      <Button
        type="auth"
        title={isLink ? 'Link' : 'Join'}
        containerDisabled={s.disabled}
        onPress={onSubmit}
        disabled={!isReadyToSubmit}
        containerStyle={styles.marginVertical3x}
      />
      <TextNew type="reviews" style={styles.marginVerticalDouble}>
        {I18n.t('sign_up.have_an_account')}
        <TextNew
          type="link"
          onPress={onGoToSignIn}
        >
          {' '}{I18n.t('sign_in_with_email.name')}
        </TextNew>
      </TextNew>
    </Animated.View>
  </Container>

);

SignUp.propTypes = {
  getRef: T.func,
  email: T.string,
  password: T.string,
  isLink: T.bool,
  isReadyToSubmit: T.bool,
  onChangeEmail: T.func,
  onChangePassword: T.func,
  onSubmit: T.func,
  setIdRef: T.func,
  onGoToSignIn: T.func,
  theme: T.object,
};

export default createScreen(SignUp, screens.SignUp);

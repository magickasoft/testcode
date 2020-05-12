import React from 'react';
import { Alert, Platform } from 'react-native';
import {
  compose,
  hoistStatics,
  withHandlers,
  withState,
  withProps,
} from 'recompose';
import VerificationCode from './VerificationCode';

import {
  withLoadingModal,
} from '../../utils/enhancers';


const MAX_LENGTH_CODE = 6;

const initialCountry = {
  cca2: 'US',
  callingCode: '1',
};

const enhance = compose(
  withLoadingModal.stateProp('isLoading'),
  withState('text', 'setText', ''),
  withState('enterCode', 'setEnterCode', false),
  withState('country', 'setCountry', initialCountry),
  withState('refTextInput', 'setRefTextInput', React.createRef()),
  withState('refCountryPicker', 'setRefCountryPicker', React.createRef()),
  withHandlers({
    verifyCode: props => () => {
      props.refTextInput.blur();

      setTimeout(() => {
        Alert.alert('Success!', 'You have successfully verified your phone number');
      }, 100);
      props.navigator.popToRoot();
    },
    getCode: ({ refTextInput, setEnterCode }) => () => {
      if (Platform.OS === 'ios') {
        refTextInput.setNativeProps({ text: ' ' });
      }

      setTimeout(() => {
        refTextInput.setNativeProps({ text: '' });
      }, 5);

      setTimeout(() => {
        Alert.alert('Sent!', "We've sent you a verification code", [{
          text: 'OK',
          onPress: () => refTextInput.focus(),
        }]);
      }, 100);
      setEnterCode(true);
    },
  }),
  withProps(({ enterCode, verifyCode, getCode }) => ({
    onSubmitEditing: enterCode ? verifyCode : getCode,
  })),
  withHandlers({
    onChangeText: ({ enterCode, verifyCode }) => val => {
      if (!enterCode) return;
      if (val.length === MAX_LENGTH_CODE) {
        verifyCode();
      }
    },
    tryAgain: ({ refTextInput, setEnterCode }) => () => {
      refTextInput.setNativeProps({ text: '' });
      refTextInput.focus();
      setEnterCode(false);
    },
    changeCountry: ({ refTextInput, setCountry }) => country => {
      setCountry(country);
      refTextInput.focus();
    },
  }),
);

export default hoistStatics(enhance)(VerificationCode);

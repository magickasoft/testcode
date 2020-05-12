import React from 'react';
import T from 'prop-types';
import {
  Platform,
  KeyboardAvoidingView as KeyboardAvoiding
} from 'react-native';
import { dimensions } from '../../styles';

const keyboardOffset = dimensions.appBarHeight + dimensions.statusBarHeight;

const defaultAvoid =
  Platform.OS === 'ios'
    ? {
      behavior: 'padding',
      keyboardVerticalOffset: 0
    }
    : {};

const avoidWithHeader =
  Platform.OS === 'ios'
    ? {
      behavior: 'padding',
      keyboardVerticalOffset: keyboardOffset
    }
    : {};

const KeyboardAvoidingView = ({ withHeader, children, ...props }) => {
  const keyboardAvoidingProps = withHeader ? avoidWithHeader : defaultAvoid;

  return (
    <KeyboardAvoiding {...keyboardAvoidingProps} {...props}>
      {children}
    </KeyboardAvoiding>
  );
};

KeyboardAvoidingView.propTypes = {
  children: T.any,
  withHeader: T.bool
};

export default KeyboardAvoidingView;

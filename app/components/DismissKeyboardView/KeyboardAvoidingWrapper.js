import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import PropTypes from 'prop-types';
import { platform } from '@constants';

function KeyboardAvoidingWrapper(props) {
  const Wrapper = platform.android || props.disableAvoiding ? View : KeyboardAvoidingView;

  return <Wrapper {...props} behavior="padding" />;
}

KeyboardAvoidingWrapper.propTypes = {
  disableAvoiding: PropTypes.bool
};

KeyboardAvoidingWrapper.defaultProps = {
  disableAvoiding: false
};

export default KeyboardAvoidingWrapper;

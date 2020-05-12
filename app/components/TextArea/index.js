import React from 'react';
import T from 'prop-types';
import { TextInput, View, ViewPropTypes } from 'react-native';
import Text from '../Text';
import { colors } from '../../styles';
import s from './styles';

const TextArea = ({
  inputRef,
  placeholderColor = colors.inert,
  containerStyle,
  style,
  ...props
}) => (
  <View styles={[s.root, containerStyle]}>
    <TextInput
      autoCorrect={false}
      placeholderTextColor={placeholderColor}
      underlineColorAndroid={colors.transparent}
      {...props}
      ref={inputRef}
      style={[s.input, style]}
    />
  </View>
);

TextArea.propTypes = {
  containerStyle: ViewPropTypes.style,
  inputRef: T.any,
  placeholderColor: T.string,
  style: Text.propTypes.style
};

export default TextArea;

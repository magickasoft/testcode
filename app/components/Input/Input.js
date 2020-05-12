import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes, TextInput } from 'react-native';
import Text from '../Text';
import IconVector from '../IconVector';
import TextNew from '../TextNew';
import { colors } from '../../styles';
import s from './styles';

const types = {
  auth: {
    root: s.rootAuth,
    input: s.inputAuth,
    placeholder: s.labelAuth
  },
  default: {
    root: {},
    input: {}
  }
};

const Input = ({
  isAnimatedPlaceholder,
  containerStyle,
  placeholderColor = colors.lightGrey,
  secondContainerStyle,
  containerStyleFocus = s.isAuthFocus,
  isNotValidStyle = s.isNotValid,
  icon,
  iconRight,
  inputRef,
  label,
  error,
  labelStyle,
  placeholderStyle,
  prefix,
  style,
  isFocus,
  isNotValid,
  placeholder,
  value,
  focusColor = colors.grey,
  type = 'default', // eslint-disable-line
  ...props
}) => {
  const CustomIcon = prop => ( // eslint-disable-line
    <IconVector
      style={s.icon}
      {...prop}
      {...icon}
      containerStyle={[s.containerIcon, icon.containerStyle]}
      color={isFocus ? focusColor : placeholderColor}
    />
  );

  const t = types[type];

  return (
    <View style={[s.container, containerStyle]}>
      {!!label && (
        <TextNew
          isReanimated
          type="reviews"
          style={[
            s.label,
            labelStyle
          ]}
        >
          {label}
        </TextNew>
      )}
      <View
        style={[
          s.root,
          t.root,
          isFocus && containerStyleFocus,
          isNotValid && isNotValidStyle,
          error && isNotValidStyle,
          secondContainerStyle
        ]}
      >
        {isAnimatedPlaceholder && !!value && (
          <TextNew
            isReanimated
            type="reviews"
            style={[t.placeholder, placeholderStyle]}
          >
            {placeholder}
          </TextNew>
        )}
        {!!icon && <CustomIcon />}
        <TextInput
          autoCorrect={false}
          placeholderTextColor={placeholderColor}
          underlineColorAndroid={colors.transparent}
          selectionColor={colors.purple}
          {...props}
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          style={[
            s.input,
            t.input,
            style
          ]}
        />
        {!!iconRight && <CustomIcon />}
      </View>
      {!!error && <Text style={s.error}>{error}</Text>}
    </View>
  );
};

Input.propTypes = {
  containerStyle: ViewPropTypes.style,
  containerStyleFocus: ViewPropTypes.style,
  error: T.string,
  focusColor: T.oneOfType([T.string, T.func]),
  icon: T.object,
  iconRight: T.object,
  inputRef: T.any,
  isAnimatedPlaceholder: T.bool,
  isFocus: T.bool,
  isNotValid: T.bool,
  isNotValidStyle: ViewPropTypes.style,
  label: T.string,
  labelStyle: Text.propTypes.style,
  placeholder: T.string,
  placeholderColor: T.string,
  placeholderStyle: Text.propTypes.style,
  prefix: T.string,
  secondContainerStyle: ViewPropTypes.style,
  style: Text.propTypes.style,
  type: T.oneOf(['auth', 'default']),
  value: T.string
};

export default Input;

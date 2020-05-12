import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import s from './styles';
import TextNew from '../TextNew';
import Text from '../Text';

const PickerSelect = ({ containerStyle, label, labelStyle, ...props }) => (
  <View style={containerStyle}>
    {!!label && (
      <TextNew
        isReanimated
        type="reviews"
        style={[s.label, labelStyle]}
      >
        {label}
      </TextNew>
    )}
    <RNPickerSelect
      style={s}
      {...props}
    />
  </View>
);

PickerSelect.propTypes = {
  containerStyle: ViewPropTypes.style,
  label: T.string,
  labelStyle: Text.propTypes.style
};

export default PickerSelect;

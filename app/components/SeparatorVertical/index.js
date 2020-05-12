/* eslint-disable */
import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';

const SeparatorVertical = ({
  style,
  marginLeft,
  marginHorizontal,
}) => (
  <View
    style={[
      s.root,
      style,
      marginLeft && { marginLeft },
      marginHorizontal && { marginHorizontal },
    ]}
  />
);
SeparatorVertical.propTypes = {
  style: ViewPropTypes.style,
  marginLeft: T.number,
};

export default SeparatorVertical;

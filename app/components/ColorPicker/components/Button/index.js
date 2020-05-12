import React from 'react';
import { TouchableOpacity } from 'react-native';
import T from 'prop-types';
import Text from '../../../Text';
import s from './styles';

const Button = ({ title, ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={s.button}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: T.string
};

export default Button;

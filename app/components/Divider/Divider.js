import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Divider = ({ style, indent }) => (
  <View style={[styles.container, { marginHorizontal: indent }, style]} />
);

Divider.propTypes = {
  indent: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

Divider.defaultProps = {
  indent: 0,
  style: {}
};

export default Divider;

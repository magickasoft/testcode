import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#F68C41',
    padding: 4,
    borderRadius: 9,
    minWidth: 18,
    minHeight: 18,
    alignItems: 'center'
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 9,
    lineHeight: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});

const Badge = ({
  style, textStyle, value, ...rest
}) => ((typeof value === 'number' && value > 0) || (typeof value === 'string' && value.length > 0)) && (
  <View style={[styles.badge, style]} pointerEvents="none" {...rest}>
    <Text style={[styles.badgeText, textStyle]}>{value}</Text>
  </View>
);

Badge.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Badge;

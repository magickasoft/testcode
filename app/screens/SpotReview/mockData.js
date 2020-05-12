import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../components';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Route = () => (
  <View style={[styles.root]} >
    <Text>Info is coming soon</Text>
  </View>
);

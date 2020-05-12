import React from 'react';
import { View } from 'react-native';
import { Alert } from '../../components';
import styles from '../../styles';

const withAlert = config => Component => props => (
  <View style={styles.fillAll}>
    <Component {...props} />
    <Alert {...config(props)} />
  </View>
);

export default withAlert;

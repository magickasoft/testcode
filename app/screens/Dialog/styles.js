import { StyleSheet } from 'react-native';

import isIPhoneX from '../../utils/isIPhoneX';

export const styles = StyleSheet.create({
  screenContainer: {
    marginBottom: isIPhoneX ? 34 : 0
  },
  container: {
    flexDirection: 'row'
  },
  primary: {
    flexGrow: 1
  },
  accessory: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 5
  },
  sendContainer: {
    alignItems: 'flex-end',
    marginRight: 5
  },
  icon: {
    marginBottom: 10,
    marginRight: 5,
    color: '#0084ff'
  },
  readIcon: {
    marginRight: 5,
    color: '#fff'
  }
});

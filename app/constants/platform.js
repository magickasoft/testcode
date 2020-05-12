import { Platform } from 'react-native';

export default {
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android'
};

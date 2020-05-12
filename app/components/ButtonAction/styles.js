import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../styles/index';

const shadow = Platform.select({
  ios: {
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: {
      height: 4,
      width: 2
    }
  },
  android: {
    elevation: 20
  }
});

export default StyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  rootButtonTextStyle: {
    fontSize: 35
  },
  textStyle: {
    color: colors.activePrimary
  },
  textContainerStyle: {
    backgroundColor: colors.transparent,
    borderWidth: 0
  },
  blurView: {
    backgroundColor: colors.transparent,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  shadow
});

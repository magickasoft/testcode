import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const shadow = Platform.select({
  ios: {
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {
      height: 3,
      width: 1
    }
  },
  android: {
    elevation: 10
  }
});

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  marker: {
    ...shadow,
    backgroundColor: colors.transparent
  },
  itemShadow: {
    backgroundColor: 'gray',
    height: 1,
    width: 1,
    position: 'absolute',
    top: 50,
    left: 50
  }
});

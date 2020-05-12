import { StyleSheet } from 'react-native';

export default (colors) => StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundPrimary
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  containerStyle: {},
  cornerStyle: {
    flex: 0
  }
});

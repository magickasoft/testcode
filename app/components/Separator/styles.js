import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  root: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.dartInert,
    opacity: 0.5
  },
  shadow: {
    backgroundColor: colors.dartInert,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.9,
        shadowRadius: 1,
        shadowOffset: {
          height: 2,
          width: 0
        }
      },
      android: {
        elevation: 0.3
      }
    })
  },
  opacity: {
    opacity: 0.3
  }
});

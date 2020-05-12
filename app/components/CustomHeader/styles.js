import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:
      Platform.select({
        android: 56,
        default: 44
      }) + getStatusBarHeight()
  },
  centerContainer: {
    flex: 3
  },
  rightLeftContainer: {
    flex: 1
  }
});

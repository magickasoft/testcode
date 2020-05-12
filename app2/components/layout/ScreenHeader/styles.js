import { Platform, StatusBar, StyleSheet } from 'react-native';
import { isIphoneX } from 'utils';

const iPhoneSpace = isIphoneX() ? 40 : 20;
const topSpace = (Platform.OS === 'ios' ? iPhoneSpace : StatusBar.currentHeight) + 5;

export default theme => StyleSheet.create({
  flex: {
    flex: 1
  },
  header: {
    backgroundColor: theme.color.bgPrimary,
    paddingTop: topSpace + 6,
    paddingLeft: 4,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: theme.color.primaryText,
    fontSize: 17
  },
  title: {
    marginHorizontal: 8
  },
  backBtn: {
    width: 71,
    flexDirection: 'row',
    padding: 5
  },
  backIcon: {
    marginRight: 3
  },
  rightContent: {
    padding: 5
  },
  placeholder: { width: 71 }
});

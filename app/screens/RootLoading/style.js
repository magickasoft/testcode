import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';
import isIPhoneX from '../../utils/isIPhoneX';
import theme from '../../services/theme';

const colors = theme.get();

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    padding: dimensions.indent * 2.5,
    paddingBottom: dimensions.indent * (isIPhoneX ? 5 : 2.5),
  },
  logo: {
    width: dimensions.windowWidth,
    resizeMode: 'contain',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.33,
  },
});

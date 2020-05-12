import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';
import isIPhoneX from '../../utils/isIPhoneX';

const styles = colors => StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    padding: dimensions.indent * 2.5,
    paddingBottom: dimensions.indent * (isIPhoneX ? 5 : 2.5),
  },
  logo: {
    width: dimensions.windowWidth,
    resizeMode: 'contain',
    // alignSelf: 'center',
  },
  // containers
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3.4,
  },
  contentContainer: {
    flex: 5,
    alignItems: 'center',
  },
  privacyContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingRight: dimensions.indent * 3,
  },

  // separator
  separatorContainer: {
    flexDirection: 'row',
    height: dimensions.verticalIndent * 6.5,
    width: '100%',
    alignItems: 'center',
  },
  separator: {
    flex: 1,
    backgroundColor: colors.lightestGrey,
  },
  textSeparator: {
    color: colors.white,
    marginHorizontal: dimensions.indent,
  },

  // common
  text: {
    marginTop: dimensions.indent * 1.5,
    letterSpacing: 0.3,
    alignSelf: 'flex-start',
    color: colors.white,
    lineHeight: 20,
  },
  icon: {
    marginLeft: dimensions.indent,
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

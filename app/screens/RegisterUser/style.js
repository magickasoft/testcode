import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '../../styles';

const BUTTON_BACKGROUND_COLOR = '#312d3b';
const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';

const styles = colors => StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: dimensions.indent,
  },
  logo: {
    width: dimensions.verticalIndent * 30,
    height: dimensions.verticalIndent * 30,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.smaller,
  },
  containerForgotPassword: {
    marginBottom: dimensions.indent,
    marginTop: dimensions.indent,
  },
  forgotPassword: {
    color: colors.black,
    fontSize: fontSizes.smaller,
    alignSelf: 'flex-end',
  },

  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  facebookContainer: {
    backgroundColor: colors.facebook,
    flex: 1,
  },
  googleContainer: {
    backgroundColor: colors.google,
    flex: 1,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: dimensions.indent,
    marginRight: dimensions.indent * 2,
    padding: 0,
  },
  containerButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: BUTTON_BACKGROUND_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    margin: 4,
  },
  disabled: {
    backgroundColor: BUTTON_BACKGROUND_DISABLED_COLOR,
  },
  accept: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  errorText: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;

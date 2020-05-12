import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';

const BUTTON_BACKGROUND_COLOR = '#312d3b';
const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f3f3f3',
  },
  container: {
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
  policyContainer: {
    marginHorizontal: dimensions.indent / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    textDecorationLine: 'underline',
  },
  containerTerms: {
    marginHorizontal: dimensions.indent,
  },
  placeholder: {
    color: '#a9a9a9',
  },
});

export default styles;

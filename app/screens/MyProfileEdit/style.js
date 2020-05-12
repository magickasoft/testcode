import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';

const { indent } = dimensions;

const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  wrapper: {
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
    fontSize: fontSizes.medium,
  },
  labelStyle: {
    paddingBottom: indent / 2,
    paddingTop: indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '700',
  },
  containerButton: {
    backgroundColor: colors.activePrimary,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
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
  disabled: {
    backgroundColor: BUTTON_BACKGROUND_DISABLED_COLOR,
  },
  textArea: {
    height: dimensions.indent * 14,
  },
  containerTextArea: {
    height: dimensions.indent * 15,
  },
});

export default styles;

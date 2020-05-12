import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '../../styles';

const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';

export default (colors) => StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: dimensions.indent
  },
  logo: {
    width: dimensions.verticalIndent * 30,
    height: dimensions.verticalIndent * 30,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.smaller
  },
  containerForgotPassword: {
    marginBottom: dimensions.indent,
    marginTop: dimensions.indent
  },
  forgotPassword: {
    color: colors.black,
    fontSize: fontSizes.smaller,
    alignSelf: 'flex-end'
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 20
  },
  facebookContainer: {
    backgroundColor: colors.facebook,
    flex: 1
  },
  googleContainer: {
    backgroundColor: colors.google,
    flex: 1
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: dimensions.indent,
    marginRight: dimensions.indent * 2,
    padding: 0
  },
  disabled: {
    backgroundColor: BUTTON_BACKGROUND_DISABLED_COLOR
  },
  policyContainer: {
    marginHorizontal: dimensions.indent / 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  link: {
    textDecorationLine: 'underline'
  },
  containerTerms: {
    marginHorizontal: dimensions.indent
  },
  buttonAdd: {
    alignItems: 'flex-end'
  },
  countryPicker: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    justifyContent: 'center'
  },
  modalContent: {
    width: '100%',
    backgroundColor: colors.white
  },
  flex: {
    flex: 1
  },
  rowData: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  highlightStyle: {
    color: colors.lightGrey
  },
  secondary: {
    color: colors.lightGrey,
    fontSize: fontSizes.small,
    fontWeight: '400'
  },
  textInputContainer: {
    borderTopWidth: 0,
    backgroundColor: colors.white,
    paddingLeft: 10,
    paddingRight: 10
  },
  textInput: {
    backgroundColor: colors.opacityGrey
  },
  row: {
    height: 'auto'
  }
});

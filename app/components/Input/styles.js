import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '@styles';

const { indent } = dimensions;

export default StyleSheet.create({
  container: {},
  root: {
    flexDirection: 'row',
    backgroundColor: colors.transparent,
    alignItems: 'flex-end',
    minHeight: indent * 5.5,
    height: 'auto'
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: fontSizes.medium,
    justifyContent: 'center'
  },
  containerIcon: {
    width: '10%',
    marginLeft: indent,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    paddingBottom: indent / 2,
    paddingTop: indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '700'
  },
  error: {
    fontSize: fontSizes.medium,
    color: colors.error,
    fontWeight: '700',
    lineHeight: fontSizes.medium
  },
  isNotValid: {
    borderWidth: 1,
    borderColor: colors.error
  },
  rootAuth: {
    backgroundColor: colors.transparent,
    borderColor: colors.inert,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  inputAuth: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.larger,
    marginBottom: indent / 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 0
  },
  labelAuth: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  isAuthFocus: {
    borderColor: colors.purple
  }
});

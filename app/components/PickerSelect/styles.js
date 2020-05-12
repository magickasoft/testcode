import { StyleSheet } from 'react-native';

import { colors, fontSizes, dimensions } from '@styles';

const { indent } = dimensions;

export default StyleSheet.create({
  inputIOS: {
    color: colors.text,
    fontSize: fontSizes.larger,
    borderColor: colors.inert,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: indent / 2,
    paddingVertical: 0,
    height: 42
  },
  inputAndroid: {
    color: colors.text,
    fontSize: fontSizes.larger,
    borderColor: colors.inert,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: indent / 2,
    paddingVertical: 0,
    height: 42
  },
  label: {
    paddingBottom: indent / 2,
    paddingTop: indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '700'
  }
});

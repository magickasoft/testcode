import { StyleSheet } from 'react-native';
import { fontSizes } from '@styles';

export default (colors) => StyleSheet.create({
  wideBtn: {
    color: colors.white,
    fontSize: fontSizes.medium
  },
  wrapperWideBtn: {
    flex: 1,
    backgroundColor: colors.activePrimary,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 15
  }
});

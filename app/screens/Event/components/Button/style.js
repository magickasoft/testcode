import { StyleSheet } from 'react-native';
import { fontSizes } from '@styles';

export default (colors) => StyleSheet.create({
  titleBtn: {
    fontSize: fontSizes.medium,
    color: colors.activePrimary
  },
  containerBtn: {
    flex: 1,
    backgroundColor: colors.ligthBlue,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginHorizontal: 5
  }
});

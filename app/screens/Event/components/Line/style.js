import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '@styles';

export default (colors) => StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.indent * 1.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginVertical: dimensions.indent,
    marginHorizontal: dimensions.indent
  },
  label: {
    color: colors.black,
    fontSize: fontSizes.small,
    fontWeight: '500'
  }
});

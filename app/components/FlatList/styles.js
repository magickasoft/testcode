import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';

export default StyleSheet.create({
  paddingBottom: {
    paddingBottom: 85
  },
  emptyText: {
    paddingTop: dimensions.halfIndent,
    textAlign: 'center',
    fontSize: fontSizes.medium,
    color: colors.greyDarkest
  }
});

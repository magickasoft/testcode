import { StyleSheet } from 'react-native';
import { colors, dimensions, fontWeights } from '../../styles';


export default StyleSheet.create({
  root: {

  },
  input: {
    color: colors.textSecondary,
    marginVertical: dimensions.indent,
    marginHorizontal: dimensions.indent * 2,
    fontWeight: fontWeights.thin
    // lineHeight: dimensions.indent * 3,
  }
});

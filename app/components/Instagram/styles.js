import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const { indent } = dimensions;

export default StyleSheet.create({
  root: {
    overflow: 'hidden',
    marginVertical: indent,
    marginBottom: indent * 2.6,
    borderRadius: indent / 2,
    backgroundColor: colors.white
  },
});

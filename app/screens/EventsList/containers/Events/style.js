import { StyleSheet } from 'react-native';
import { dimensions } from '@styles';

export default colors => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.almostWhite,
  },
  content: {
    padding: dimensions.indent,
    paddingTop: 10,
  },
});

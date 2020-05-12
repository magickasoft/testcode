import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

const styles = colors => StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundSecondary,
  },
  containerSearch: {
    backgroundColor: colors.backgroundSecondary,
    paddingHorizontal: dimensions.indent,
    width: dimensions.windowWidth,
  },
});

export default styles;

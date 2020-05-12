import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../styles';

const styles = colors => StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
  },
  contentContainerStyle: {
    backgroundColor: colors.backgroundSecondary,
    paddingBottom: dimensions.indent * 20,
  },
});

export default styles;

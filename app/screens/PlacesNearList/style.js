import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

const styles = colors => StyleSheet.create({
  containerSearch: {
    padding: dimensions.indent,
  },
  contentContainerStyle: {
    backgroundColor: colors.backgroundSecondary,
    margin: dimensions.indent,
  },
});

export default styles;

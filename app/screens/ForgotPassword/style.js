import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f3f3f3',
  },
  container: {
    padding: dimensions.indent,
  },
  disabled: {
    backgroundColor: BUTTON_BACKGROUND_DISABLED_COLOR,
  },
  placeholder: {
    color: '#a9a9a9',
  },
});

export default styles;

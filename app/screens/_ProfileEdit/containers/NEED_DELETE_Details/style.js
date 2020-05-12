import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../styles';


const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: dimensions.indent,
  },
  // card
  image: {
    height: dimensions.verticalIndent * 12.5,
  },
  content: {
    height: dimensions.verticalIndent * 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    margin: dimensions.indent,
  },
});

export default styles;

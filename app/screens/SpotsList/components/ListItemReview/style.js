import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../styles';

export const IMAGE_HEIGHT = dimensions.indent * 10;

const styles = () => StyleSheet.create({
  image: {
    height: IMAGE_HEIGHT,
  },
  content: {
    flex: 1,
    height: dimensions.indent * 10,
    padding: dimensions.verticalIndent,
    justifyContent: 'space-between',
  },
  title: {
    flexDirection: 'row',
  },
  subTitle: {
    flexDirection: 'row',
    // marginVertical: dimensions.indent,
  },
  footerContent: {
    flexDirection: 'row',
  },
});

export default styles;

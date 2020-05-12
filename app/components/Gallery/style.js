import { StyleSheet } from 'react-native';
import { colors, dimensions, scalingUtils } from '../../styles';

const IMAGE_HEIGHT = scalingUtils.scale(140);
const IMAGE_WIDTH = scalingUtils.scale(101);

export default StyleSheet.create({
  img: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    backgroundColor: colors.inert,
    marginRight: dimensions.indent,
    borderRadius: 3,
    overflow: 'hidden'
  },
  container: {
    minHeight: IMAGE_HEIGHT
  }
});

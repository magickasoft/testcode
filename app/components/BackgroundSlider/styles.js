import { StyleSheet } from 'react-native';
import { dimensions, colors } from '../../styles';

export default StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundPrimary,
    width: dimensions.windowWidth,
    justifyContent: 'flex-end'
  },
  svgContainer: {
    width: dimensions.windowWidth,
    position: 'absolute',
    justifyContent: 'flex-end'
  },
  carouselContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  childrenContainer: {
    width: dimensions.windowWidth
  }
});

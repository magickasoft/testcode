import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

export default StyleSheet.create({
  rootRate: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: dimensions.indent / 10
  },
  stars: {
    overflow: 'hidden',
    borderWidth: 0,
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  reviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: dimensions.verticalIndent / 1.5,
    marginHorizontal: dimensions.indent / 3
  },
  ratingColorImage: {
    position: 'absolute'
  },
  heartEmpty: {
    marginLeft: 8
  }
});

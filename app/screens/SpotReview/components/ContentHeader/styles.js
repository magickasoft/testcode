import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '@styles';

export default (colors) => StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: dimensions.indent * 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleContainer: {
    marginTop: 2,
    marginBottom: 5
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  priceAndReviewsContainer: {
    flexDirection: 'row'
  },
  reviewsCount: {
    marginLeft: 5,
    fontSize: fontSizes.smaller,
    marginBottom: -1
  },
  category: {
    color: colors.activePrimary
  },
  priceAndCategoryText: {
    fontSize: fontSizes.smaller
  },
  bookmarkButton: {
    margin: -10,
    padding: 10
  }
});

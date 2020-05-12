import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, scalingUtils } from '../../../../styles';

export default (colors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: dimensions.indent,
    marginBottom: dimensions.indent,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2
  },
  itemFirst: {
    marginTop: dimensions.indent
  },
  image: {
    width: scalingUtils.scale(120),
    height: dimensions.indent * 16,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  distance: {
    top: 0,
    left: 0,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: dimensions.indent / 2,
    backgroundColor: colors.activePrimary,
    position: 'absolute'
  },
  distanceText: {
    color: 'white',
    fontSize: fontSizes.xSmall
  },
  points: {
    bottom: dimensions.indent * 1.5,
    left: -4,
    borderRadius: 2,
    padding: dimensions.indent / 3,
    backgroundColor: '#FBD708',
    position: 'absolute'
  },
  pointsText: {
    fontSize: fontSizes.xSmall
  },
  rightContainer: {
    padding: dimensions.indent,
    justifyContent: 'space-between',
    flex: 1
  },
  title: {
    color: colors.black,
    fontSize: fontSizes.larger,
    marginBottom: dimensions.indent * 0.6,
    maxWidth: scalingUtils.scale(175)
  },
  category: {
    color: colors.black
  },
  rightTopContainer: {
    flex: 1
  },
  titleAndBookmark: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceAndCategory: {
    flexDirection: 'row'
  },
  rateContainer: {
    borderWidth: 0,
    borderColor: colors.transparent,
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviews: {
    marginLeft: 5,
    color: '#A4A5A7'
  },
  bookmarkContainer: {
    paddingTop: 4
  },
  address: {
    marginVertical: 6
  },
  bookmarkButton: {
    margin: -10,
    padding: 10
  }
});

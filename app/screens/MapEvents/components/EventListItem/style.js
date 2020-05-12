import { StyleSheet } from 'react-native';
import style, { colors, dimensions, fontSizes, scalingUtils } from '../../../../styles';

export const ITEM_HEIGHT = dimensions.windowWidth * 0.22;
export const ITEM_WIDTH = dimensions.windowWidth * 0.8;

const IMG_SIZE = ITEM_HEIGHT - dimensions.indent * 2;

export default StyleSheet.create({
  itemContainer: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    backgroundColor: colors.backgroundPrimary,
    margin: dimensions.halfIndent,
    borderRadius: 5,
    flexDirection: 'row',
    padding: dimensions.indent,
    ...StyleSheet.flatten(style.shadow)
  },
  content: {
    flex: 2,
    marginLeft: dimensions.indent,
    paddingBottom: dimensions.indent / 2
  },
  imgContainer: {
    overflow: 'hidden',
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: 3,
    marginBottom: dimensions.halfIndent
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: scalingUtils.moderateScale(17)
  },
  reviews: {
    color: colors.darkGrey,
    fontSize: fontSizes.smaller
  },
  contentHeader: {
    flex: 1
  },
  subTitle: {
    flexDirection: 'row',
    marginVertical: dimensions.indent
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center'
  },
  rate: {
    fontFamily: 'SFProText-Bold',
    fontSize: scalingUtils.moderateScale(20),
    letterSpacing: -1,
    marginBottom: -6
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.transparent

  }
});

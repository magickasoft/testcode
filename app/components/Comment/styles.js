import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '../../styles';
import { moderateScale } from '../../styles/scalingUtils';

const ROOT_PADDING = dimensions.indent;
const TEXT_CONTAINER_PADDING_HORIZONTAL = dimensions.doubleIndent;
const TEXT_CONTAINER_MARGIN_LEFT = dimensions.doubleIndent * 2.5;

export const WIDTH_TEXT = (
  dimensions.windowWidth -
  ROOT_PADDING * 2 -
  TEXT_CONTAINER_PADDING_HORIZONTAL * 2 -
  TEXT_CONTAINER_MARGIN_LEFT
);

export default (colors) => StyleSheet.create({
  root: {
    paddingVertical: ROOT_PADDING,
    paddingLeft: ROOT_PADDING,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    height: moderateScale(35)
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameContainerSecond: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: fontSizes.medium
  },
  date: {
    fontSize: fontSizes.xSmall,
    textAlign: 'right',
    marginRight: dimensions.indent
  },
  ratingContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end'
  },
  textContainer: {
    marginTop: dimensions.indent,
    // paddingHorizontal: TEXT_CONTAINER_PADDING_HORIZONTAL,
    // paddingTop: dimensions.indent,
    // paddingBottom: dimensions.halfIndent,
    // marginLeft: moderateScale(40) + dimensions.indent,
    borderRadius: dimensions.indent,
    overflow: 'hidden'
  },
  moreContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%'
  },
  moreTitle: {
    textAlign: 'center',
    color: colors.activePrimary,
    fontSize: fontSizes.xxSmall,
    fontWeight: fontWeights.semiBold
  },
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(40) / 2,
    marginRight: dimensions.indent * 1.5
  },
  onlineIndicator: {
    position: 'absolute',
    right: -3,
    bottom: 2,
    backgroundColor: '#00CC00',
    width: 14,
    height: 14,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#ffffff'
  },
  buttonMore: {
    marginRight: dimensions.indent * 1.5
  },
  text: {
    width: '100%'
  },
  textCalculations: {
    position: 'absolute',
    width: WIDTH_TEXT,
    left: dimensions.windowWidth,
    opacity: 0
  },
  rightContainer: {
    flex: 1
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  dotsIconStyle: {
    marginTop: 5
  },
  rightContent: {
    paddingRight: ROOT_PADDING
  },
  nameAndBadge: {
    flexDirection: 'row'
  },
  badgeContainer: {
    backgroundColor: colors.activePrimary,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 5,
    marginLeft: 5,
    justifyContent: 'center'
  },
  badgeText: {
    fontSize: fontSizes.xxSmall,
    color: colors.white,
    lineHeight: 9
  },
  badgeImage: {
    width: 17,
    height: 17,
    marginLeft: 5
  }
});

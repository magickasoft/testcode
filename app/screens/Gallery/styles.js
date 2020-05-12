import { StyleSheet } from 'react-native';
import { fontWeights, colors, dimensions } from '../../styles';
import fontSizes from '../../styles/fontSizes';
import isIPhoneX from '../../utils/isIPhoneX';

export default StyleSheet.create({
  indexIndicator: {
    fontWeight: fontWeights.bold,
    color: colors.white,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: dimensions.indent,
    paddingTop: dimensions.indent,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 5,
    marginRight: 5,
  },
  userName: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.small,
    color: colors.white,
  },
  footerContainer: {
    width: '100%',
  },
  infoContainer: {
    paddingLeft: dimensions.indent,
    paddingBottom: dimensions.indent,
  },
  title: {
    color: colors.white,
    fontWeight: fontWeights.bold,
  },
  date: {
    fontSize: fontSizes.smaller,
    color: colors.white,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: dimensions.indent,
    paddingHorizontal: dimensions.indent,
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
  },
  likeCount: {
    fontWeight: fontWeights.bold,
    color: colors.white,
  },
  iconsPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMarginLeft: {
    marginLeft: 15,
  },
  root: {
    backgroundColor: colors.black,
    paddingBottom: isIPhoneX ? 34 : 0,
  },
  contentContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    backgroundColor: colors.black,
  },
  imageContainer: {
    width: dimensions.windowWidth,
    height: '100%',
  },
});

import { StyleSheet } from 'react-native';
import { fontSizes, fontWeights, colors, dimensions } from '../../styles';

export default StyleSheet.create({
  default: {
    fontFamily: 'SFProText-Regular'
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: fontSizes.large
  },
  xxRate: {
    fontFamily: 'SFProText-Bold',
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -3
  },
  reviews: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.medium
  },
  point: {
    fontFamily: 'SFProText-Semibold',
    fontSize: fontSizes.medium
  },
  xSmallPoint: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 9
  },
  link: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.medium,
    color: colors.purple
  },
  bold: {
    fontFamily: 'SFProText-Bold',
    fontWeight: fontWeights.bold
  },


  // old
  h1: {
    fontFamily: 'SFProText-Bold',
    fontSize: fontSizes.large,
    bottom: 0
  },
  h2: {
    fontFamily: 'SFProText-Bold',
    fontSize: fontSizes.larger,
    bottom: 0
  },
  titleNavBar: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.large,
    color: colors.white,
    marginLeft: dimensions.indent,
    bottom: 0
  },
  subtitleNavBar: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.smaller,
    color: colors.white,
    bottom: 0
  },
  label: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.larger,
    fontWeight: fontWeights.normal,
    color: colors.textPrimary
  },
  dedicatedNumber: {
    fontFamily: 'SFProText-Bold',
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold
  },
  regular: {
    fontFamily: 'SFProText-regular',
    fontSize: fontSizes.small,
    fontWeight: fontWeights.light,
    lineHeight: dimensions.indent * 2
  },
  name: {
    fontFamily: 'SFProText-regular',
    fontSize: fontSizes.smaller,
    fontWeight: fontWeights.medium
  },
  date: {
    fontFamily: 'SFProText-regular',
    fontSize: fontSizes.xxSmall,
    color: colors.inert
  }
});

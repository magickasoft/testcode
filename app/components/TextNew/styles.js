import { StyleSheet } from 'react-native';
import { fontSizes, colors } from '../../styles';

export default StyleSheet.create({
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: fontSizes.xxLarge
  },
  xxRate: {
    fontFamily: 'SFProText-Bold',
    fontSize: 44,
    lineHeight: 42,
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
  link: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.medium,
    color: colors.purple
  },
  error: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.medium,
    color: colors.error,
    fontWeight: '700',
    lineHeight: fontSizes.medium
  }
});

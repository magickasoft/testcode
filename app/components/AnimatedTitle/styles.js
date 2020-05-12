import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, scalingUtils } from '@styles';
import { platform } from '@constants';

// const DISTANCE_TO_LEFT = dimensions.indent / 2 * (platform.ios ? 3.5 : 5);
const DISTANCE_TO_RIGHT = dimensions.indent / 2 * (platform.ios ? 5 : 6);

export default StyleSheet.create({
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: fontSizes.larger,
    color: colors.black
  },
  titleAbsolute: {
    fontFamily: 'SFProText-Bold',
    fontSize: fontSizes.large,
    color: colors.white
  },
  titleContainer: {
    fontFamily: 'SFProText-Bold',
    justifyContent: 'center',
    width: scalingUtils.scale(290),
    backgroundColor: colors.transparent
  },
  titleAbsoluteContainer: {
    fontFamily: 'SFProText-Bold',
    position: 'absolute',
    top: 0,
    left: 0,
    right: DISTANCE_TO_RIGHT,
    zIndex: 2,
    height: dimensions.navBarHeight,
    justifyContent: 'center'
  }
});

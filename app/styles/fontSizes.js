import { moderateScale } from './scalingUtils';

const fontSizes = {
  xxLarge: moderateScale(23), // +
  xLarge: moderateScale(21),
  large: moderateScale(18),
  larger: moderateScale(15), // +
  medium: moderateScale(13), // +
  small: moderateScale(12),
  smaller: moderateScale(11),
  xSmall: moderateScale(10),
  xxSmall: moderateScale(9),
  xxxSmall: moderateScale(8),
};

export default fontSizes;

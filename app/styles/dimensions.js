import { Dimensions, Platform, StatusBar } from 'react-native';
import { moderateScale, verticalScale } from './scalingUtils';
import isIPhoneX from '../utils/isIPhoneX';


const { width, height } = Dimensions.get('window');

export const verticalIndent = verticalScale(8);

export const indent = moderateScale(8);
export const halfIndent = moderateScale(indent / 2);
export const doubleIndent = moderateScale(indent * 2);

export const headerTitleOffset = 48;

export const letterSpacingBig = 3;
export const letterSpacing = 2;

export const windowWidth = width;
export const windowHeight = height;

export const statusBarHeight = Platform.select({
  ios: isIPhoneX ? 44 : 20,
  android: StatusBar.currentHeight,
});

export const navBarHeight = Platform.select({
  ios: 44,
  android: 56,
});

export const appBarHeight = navBarHeight + statusBarHeight;

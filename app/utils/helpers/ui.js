import { Dimensions, Platform, StatusBar, PixelRatio } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import { throttle } from 'lodash';
import { platform } from '@constants';

const { width, height } = Dimensions.get('window');


export const isRetina = PixelRatio.get() >= 2;

export const deviceWidth = platform.ios ? width : ExtraDimensions.get('REAL_WINDOW_WIDTH');
export const deviceHeight = platform.ios ? height : ExtraDimensions.get('REAL_WINDOW_HEIGHT');

export function isIPhoneXSize() {
  return height === 812 || width === 812;
}

export function isIPhoneXrSize() {
  return height === 896 || width === 896;
}

export function isIphoneX() {
  return platform.ios && !Platform.isPad && !Platform.isTVOS && (isIPhoneXSize() || isIPhoneXrSize());
}

export function toggleStatusBar(oldProps, newProps) {
  if (platform.android) {
    if (!oldProps && newProps) {
      StatusBar.setHidden(true);
    } else if (oldProps && !newProps) {
      StatusBar.setHidden(false);
    }
  }
}

export const headerPadding = platform.android ? StatusBar.currentHeight + 5 : 25;
export const iPhoneHeaderPadding = isIphoneX() ? 45 : headerPadding;

export const throttledAction = (fn) => throttle(fn, 1000, { trailing: false });

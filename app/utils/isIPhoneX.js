import { Dimensions, Platform } from 'react-native';

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;


export default Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
  ? (
    W_WIDTH === X_WIDTH
    && W_HEIGHT === X_HEIGHT
    || W_WIDTH === XSMAX_WIDTH
    && W_HEIGHT === XSMAX_HEIGHT
  ) : false;

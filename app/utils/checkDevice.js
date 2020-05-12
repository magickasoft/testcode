import DeviceInfo from 'react-native-device-info';

const deviceName = DeviceInfo.getDeviceName();

const isIphoneXR = deviceName === 'iPhone XR';

export { isIphoneXR };

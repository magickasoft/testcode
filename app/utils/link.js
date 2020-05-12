import { Linking, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { tokens as tokensConst } from '@constants';
import { tokens } from '@services';
import { dimensions } from '@styles';

const getInfo = async () => {
  const profileId = await tokens.get(tokensConst.ID_PROFILE);

  const deviceInfo = {
    apiLevel: await DeviceInfo.getAPILevel(),
    brand: DeviceInfo.getBrand(),
    deviceCountry: DeviceInfo.getDeviceCountry(),
    deviceId: DeviceInfo.getDeviceId(),
    fontScale: DeviceInfo.getFontScale(),
    model: DeviceInfo.getModel(),
    osVersion: DeviceInfo.getSystemVersion(),
    os: Platform.OS
  };
  return {
    profileId,
    ...deviceInfo
  };
};

const openUrl = (url) => Linking.openURL(url);

const divider = Platform.OS === 'ios' ? '&' : '?';

const openSms = (phone, body) => openUrl(`sms:${phone}${divider}body=${body}`);

const openEmail = ({
  email,
  message,
  url,
  title
}) => openUrl(`mailto:${email}?subject=${title}&body=${message} ${url}`);

const openEmailWithPhoneInfo = async (email = 'support@joinspectra.com') => {
  const info = await getInfo();

  await openEmail({
    email,
    title: info.profileId,
    message: `
          OS: ${info.osVersion}
          model: ${info.model}
          resolutions: ${dimensions.windowWidth} x ${dimensions.windowHeight}
          scale: ${info.fontScale}
        `,
    url: 'Spectra'
  });
};

export default {
  openEmailWithPhoneInfo,
  openSms,
  openEmail,
  openUrl
};

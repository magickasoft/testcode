import { GoogleSignin as Google } from 'react-native-google-signin';
import Config from 'react-native-config';

import { platform, providers } from '@constants';
import { restApi } from '@services';

class GoogleSignIn {
  constructor(config) {
    this.config = config;
    this.data = {};
  }
  getInitUser() {
    return this.data;
  }
  init = async () => {
    await Google.hasPlayServices({
      autoResolve: true,
      showPlayServicesUpdateDialog: true,
    });
    await Google.configure(this.config);
  };
  signIn = async () => {
    const data = await Google.signIn();
    this.data = data;

    return data;
  };
  signOut = async () => { // eslint-disable-line
    try {
      // await Google.revokeAccess();
      await Google.signOut();
    } catch (e) {
      let err = null;

      if (e.error !== 'SIGN_IN_REQUIRED') {
        err = e;
      }

      return err;
    }
  };
  auth = async () => { // eslint-disable-line
    await this.init();
    const data = await this.signIn();
  
    const res = await restApi.auth(providers.google, data.serverAuthCode);
    return res;
  };
}

const config = {
  iosClientId: Config.IOS_CLIENT_ID,
  forceConsentPrompt: true,
  webClientId: Config.WEB_CLIENT_ID,
  offlineAccess: platform.android,
};

const googleSignIn = new GoogleSignIn(config);

export default googleSignIn;

import CookieManager from 'react-native-cookies';
import Config from 'react-native-config';

import { restApi } from '@services';
import { providers } from '@constants';

// import { NotVisibleError } from '../utils/error';

// const createCallBack = (resolve, reject) => (err, data) => {
//   if (err) {
//     reject(err);
//   } else {
//     resolve(data);
//   }
// };

const config = {
  clientId: Config.INSTAGRAM_CLIENT_ID,
};

class Instagram {
  constructor(conf) {
    this.config = conf;
  }
  getConfig() {
    return this.config;
  }
  logout = async () => {
    await CookieManager.clearAll();
  }
  auth = async token => {
    const res = await restApi.auth(providers.instagram, token);
    return res;
  }
}

const instagram = new Instagram(config);

export default instagram;

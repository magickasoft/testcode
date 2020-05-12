import {
  GraphRequest,
  GraphRequestManager,
  ShareDialog,
  LoginManager,
  AccessToken,
} from 'react-native-fbsdk';
import { restApi } from '@services';
import { NotVisibleError } from '../utils/error';

const createCallBack = (resolve, reject) => (err, data) => {
  if (err) {
    reject(err);
  } else {
    resolve(data);
  }
};

const shareLinkContent = {
  contentType: 'link',
  contentUrl: 'https://www.communitya.com',
};

class Fb extends GraphRequestManager {
  getProfile = () => new Promise((resolve, reject) => {
    const infoRequest = new GraphRequest(
      '/me?fields=name,picture,first_name,last_name',
      null,
      createCallBack(resolve, reject),
    );
    this.addRequest(infoRequest).start();
  });
  shareReview = async () => {
    const canShare = await ShareDialog.canShow(shareLinkContent);
    if (canShare) {
      await ShareDialog.show(shareLinkContent);
    }
  }
  auth = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    // .logInWithPublishPermissions(['publish_actions']);

    if (result.isCancelled) {
      throw new NotVisibleError();
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new NotVisibleError();
    }

    const res = await restApi.authFacebook(data.accessToken);

    return res;
  }
}


const fb = new Fb();

export default fb;

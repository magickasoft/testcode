import Config from 'react-native-config';
import axios from 'axios';

import tokens from './tokens';
import Axios from '../utils/servicesTemplate/Axios';
import { getHeaders } from '../utils/headers';
import { query } from '../utils/helpers/fetch';
// import { query } from '../utils/helpers/fetch';

const headerFormData = {
  headers: {
    'Content-Type': 'multipart/form-data', // eslint-disable-line
  },
};

class RestApi {
  constructor(baseUrl) {
    this.profile = new Axios(`${baseUrl}/profile`);
    this.checkin = new Axios(`${baseUrl}/checkin`);
    this.security = new Axios(`${baseUrl}/security`);
    this.registration = new Axios(`${baseUrl}/registration`);
    this.site = new Axios(`${baseUrl}/site`);
    this.place = new Axios(`${baseUrl}/place`);
    this.push = new Axios(`${baseUrl}/push`);
    this.recovery = new Axios(`${baseUrl}/recovery`);
    this.codes = new Axios(`${baseUrl}/codes`);
  }

  init = () => {
    tokens.onChange(values => {
      const { profileId, authorization } = getHeaders(values);
      
      axios.defaults.headers.profileId = profileId;
      axios.defaults.headers.authorization = authorization;
    });
  };

  // profile
  sendLocation = log =>
    this.profile.post('/set-place-location', { log: [log] });

  // checkin
  setStay = params => this.checkin.post('/set-stay', params);

  // security

  login = params => this.security.post('/login', params);
  authFacebook = token => this.security.post('/facebook-auth', { token });
  auth = (authclient, code) => this.security.get(`/auth${query({ authclient, code })}`);
  blankAuth = (authclient, code) => this.security.get(`/blank-auth${query({ authclient, code })}`);

  socClients = () => this.security.get('/soc-clients');

  // registration
  register = params => this.registration.post('/register', params);
  
  // recovery
  restorePassword = params => this.recovery.post('/request', params);

  // site
  uploadImage(data) {
    const form = new FormData(); // eslint-disable-line

    form.append('file', {
      uri: data.path,
      type: data.mime,
      name: data.filename || `new-file${Date.now()}.jpg`,
    });

    return this.site.post('/upload-image', form, headerFormData);
  }
  newBusiness = data => this.place.post('/new-business', { data });

  // push
  registerPush = params => this.push.post('/register', params);
  unregisterPush = token => this.push.post('/unregister', { token });
  pushSound = (token, push_sound) => this.push.post('/sound', { token, push_sound });

  // codes
  applyPromoCode = code => this.codes.post('/apply', { code });
}

const restApi = new RestApi(`${Config.REST_API_BASE_URL}/api`);

restApi.init();

export default restApi;

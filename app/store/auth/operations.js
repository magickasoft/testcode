import R from 'ramda';
import I18n from 'react-native-i18n';
import { LoginManager } from 'react-native-fbsdk';

import {
  tokens,
  googleSignIn,
  notification,
  fb,
  restApi,
  socket,
} from '@services';
import apolloClient from '@modules';
import navigation from '@navigation';
import { store } from '@utils/helpers';
import { myProfileQueries } from '@modules/myProfile';
import { routes, tokens as constTokens, providers } from '@constants';

import { errOperations } from '../error';
import { appOperations } from '../app';
import { userOperations } from '../user';
import * as actions from './actions';


import { NotVisibleError } from '../../utils/error';

const { tryCatch } = store;

const {
  AUTH_TOKEN,
  ID_PROFILE,
} = constTokens;

const getAuthToken = res => R.pathOr(null, ['data', 'auth_key'], res);

const catcher = (err, dispatch) => { // eslint-disable-line
  dispatch(actions.authToggleLoading(false));

  if (R.pathOr(null, ['type'], err) === 'NotVisibleError') {
    return null;
  }

  if (R.pathOr(null, ['userInfo', 'NSLocalizedDescription'], err) === 'The user canceled the sign-in flow.') {
    return null;
  }

  navigation.toRoute(routes.SIGNED_OUT);
  dispatch(errOperations.errSetAuth(err));
};

const signOut = () => tryCatch(async () => {
  navigation.toRoute(routes.SIGNED_OUT);
  await notification.unsubscribe();

  await Promise.all([
    googleSignIn.signOut(),
    LoginManager.logOut(),
    tokens.removeAll(),
    apolloClient.clearStore(),
  ]);

  socket.disconnect();
}, (e, dispatch) => {
  dispatch(errOperations.errSetAuth(e));
});

const checkTokens = () => tryCatch(async dispatch => {
  const [authToken, profileId] = await tokens.getAll();

  if (authToken && profileId) {
    dispatch(actions.authToggleLoading(false));
    dispatch(appOperations.appSignedInInit());
  } else {
    dispatch(signOut());
  }
}, (e, dispatch) => {
  dispatch(errOperations.errSetAuth(e));
});

const signIn = (authKey, provider) => tryCatch(async dispatch => { // eslint-disable-line
  await tokens.set(AUTH_TOKEN, authKey);
  const res = await apolloClient.query({
    query: myProfileQueries.GET_MY_PROFILES,
    fetchPolicy: 'network-only',
  });

  const profiles = R.pathOr([], ['data', 'myProfiles'], res);

  if (R.isEmpty(profiles)) {
    dispatch(userOperations.goToCreateProfile(provider));
    throw new NotVisibleError();
  }

  await tokens.set(ID_PROFILE, profiles[0].id);

  dispatch(actions.authToggleLoading(false));
  dispatch(appOperations.appSignedInInit());
}, catcher);

const signUpWithEmail = ({ email, password }, navigator) => tryCatch(async dispatch => {
  dispatch(actions.authToggleLoading(true));

  const params = {
    email,
    password,
    rules_agree: true,
  };

  const res = await restApi.register({ params });

  dispatch(actions.authToggleLoading(false));
  navigator.pop();
  dispatch(appOperations.appSetSuccessMessage(res.data.message));
}, catcher);


const signInWithEmailAndPassword = (login, password) => tryCatch(async dispatch => { // eslint-disable-line
  dispatch(actions.authToggleLoading(true));

  const { data } = await restApi.login({ login, password });

  dispatch(signIn(data.auth_key));
}, catcher);

const signInWithFacebook = () => tryCatch(async dispatch => {
  dispatch(actions.authToggleLoading(true));
  const res = await fb.auth();

  dispatch(signIn(getAuthToken(res), providers.facebook));
}, catcher);

const signInWithGoogle = () => tryCatch(async dispatch => {
  dispatch(actions.authToggleLoading(true));

  const res = await googleSignIn.auth();

  dispatch(signIn(getAuthToken(res), providers.google));
}, catcher);

const restorePassword = ({ email }, navigator) => tryCatch(async dispatch => {
  dispatch(actions.authToggleLoading(true));

  await restApi.restorePassword({ email });

  dispatch(actions.authToggleLoading(false));
  navigator.pop();
  dispatch(appOperations.appSetSuccessMessage(I18n.t('forgot_password.message_sent')));
}, catcher);

export default {
  checkTokens,
  signOut,
  signInWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
  signUpWithEmail,
  authSetMessage: actions.authSetMessage,
  restorePassword,
};

import R from 'ramda';
import { Navigation } from 'react-native-navigation';

import {
  userSet,
  userToggleLoading,
  userSetMessageLinked,
  userSetBalance,
  userSetIdProfile,
  userSetInitialUser,
} from './actions';
import { googleSignIn, fb, tokens } from '../../services';
import apolloClient from '../../modules/apolloClient';

import { errOperations } from '../error';
import { appOperations } from '../app';
import navigation from '../../navigation';
import { tryCatch } from '../../utils/helpers/store';
import { myProfileMutations } from '../../modules/myProfile';
import { routes, screens, tokens as constTokens, providers } from '../../constants';
import factory from '../../utils/factory';

const {
  ID_PROFILE,
} = constTokens;

const catcher = (err, dispatch) => { // eslint-disable-line
  dispatch(userToggleLoading());

  if (R.pathOr(null, ['type'], err) === 'NotVisibleError') {
    return null;
  }

  navigation.toRoute(routes.SIGNED_OUT);
  dispatch(errOperations.errSetUser(err));
};

const goToCreateProfile = provider => tryCatch(async dispatch => {
  dispatch(userToggleLoading());

  let profile;
  switch (provider) {
    case providers.facebook:
      profile = await fb.getProfile(); // eslint-disable-line
      break;
    case providers.google:
      profile = googleSignIn.getInitUser(); // eslint-disable-line
      break;
    default:
      profile = {};
  }

  dispatch(userSetInitialUser(factory.initUser(profile, provider)));
  dispatch(userToggleLoading());

  await Navigation.push(screens.OnBoarding, {
    component: {
      name: screens.RegisterUser,
      id: screens.RegisterUser,
    },
  });
});

const createProfile = variables => tryCatch(async dispatch => {
  dispatch(userToggleLoading());

  const profile = await apolloClient.mutate({
    mutation: myProfileMutations.CREATE_PROFILE,
    variables,
  });

  const profileId = R.pathOr(null, ['data', 'createProfile', 'id'], profile);

  await tokens.set(ID_PROFILE, profileId);

  dispatch(userToggleLoading());
  dispatch(appOperations.appSignedInInit());
}, catcher);

// const linkFacebook = () => tryCatch(async dispatch => {
//   const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
//
//   if (!result.isCancelled) {
//     const data = await AccessToken.getCurrentAccessToken();
//     if (!data) throw new Error('Something went wrong obtaining the users access token');
//
//     const credential = firebase.createFacebookProvider(data.accessToken);
//     await firebase.linkAndRetrieveDataWithCredential(credential);
//     dispatch(userSetMessageLinked('Facebook profile is successfully linked'));
//   }
// });
//
// const linkGoogle = () => tryCatch(async dispatch => {
//   await googleSignIn.initialization();
//
//   const { idToken, accessToken } = await googleSignIn.signIn();
//
//   const credential = firebase.createGoogleProvider(idToken, accessToken);
//   await firebase.linkAndRetrieveDataWithCredential(credential);
//   dispatch(userSetMessageLinked('Google profile is successfully linked'));
// });
//
// const linkEmail = ({ email, password }, navigator) => tryCatch(async dispatch => {
//   const credential = firebase.createEmailProvider(email, password);
//   await firebase.linkAndRetrieveDataWithCredential(credential);
//   dispatch(userSetMessageLinked('Email is successfully linked'));
//   navigator.pop();
// });

export default {
  userSet,
  userSetMessageLinked,
  userSetBalance,
  goToCreateProfile,
  createProfile,
  // linkFacebook,
  // linkGoogle,
  // linkEmail,
  userSetIdProfile,
};

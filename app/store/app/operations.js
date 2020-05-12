import R from 'ramda';
import { AsyncStorage, Platform, InteractionManager } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import navigation, { showModal } from '@navigation';
import {
  codePush,
  geolocation,
  notification,
  restApi,
  socket,
  tokens,
} from '@services';

import { appToggleLoading, appSetSuccessMessage } from './actions';
import { authOperations } from '../auth';
import { userOperations } from '../user';
import { errOperations } from '../error';
import { routes, tokens as constTokens, screens, storageKeys, platform } from '../../constants';
import { closeWsConnection } from '../../modules';

import { tryCatch } from '../../utils/helpers/store';

const catcher = (err, dispatch) => { // eslint-disable-line
  if (R.pathOr(null, ['type'], err) === 'NotVisibleError') {
    return null;
  }

  dispatch(errOperations.errSetApp(err));
  navigation.toRoute(routes.SIGNED_OUT);
};

const appInit = (skipUpdate = false) => tryCatch(async dispatch => {
  let update = null;

  if (!skipUpdate) {
    try {
      update = await codePush.checkForUpdate();
    } catch (e) {
      console.log(e);
    }
  }
  const isAcceptedEula = await AsyncStorage.getItem(storageKeys.isEulaAccepted);

  notification.init();

  if (update) {
    navigation.toRoute(routes.UPDATE);
  } else if (isAcceptedEula !== 'yes' && !platform.android) {
    navigation.toRoute(routes.ACCEPT_EULA);
  } else {
    dispatch(authOperations.checkTokens());
  }
}, catcher);

const device_type = Platform.select({
  ios: 1,
  android: 5,
});

const appSignedInInit = (skipLocationCheck = false) => tryCatch(async dispatch => {
  if (!skipLocationCheck) {
    const geoState = await geolocation.init();
  
    if (!geoState.enabled) {
      InteractionManager.runAfterInteractions(() => {
        setTimeout(() => {
          showModal(screens.AllowLocation, {
            passProps: {
              initApp: true,
            },
          });
        }, 0);
      });
      return;
    }
  }

  notification.onChangeState(async state => {
    if (state.userId) {
      const oldToken = await AsyncStorage.getItem(storageKeys.pushNotificationToken);
      const isSilent = await notification.isNotificationsSilent();
      restApi.registerPush({
        token: state.userId,
        device_type,
        user_agent: DeviceInfo.getDeviceName(),
        device_id: DeviceInfo.getUniqueID(),
        push_sound: isSilent ? 0 : 1,
        ...state.userId !== oldToken && { old_token: oldToken },
      });
      await AsyncStorage.setItem(storageKeys.pushNotificationToken, state.userId);
      await geolocation.setUserId(state.userId);
    }
  });

  const idProfile = await tokens.get(constTokens.ID_PROFILE);
  await socket.connect();

  // dispatch(userOperations.userSetBalance(R.pathOr(null, ['data'], balance)));
  closeWsConnection();
  dispatch(userOperations.userSetIdProfile(idProfile));
  dispatch(userOperations.userSetBalance(1));

  navigation.toRoute(routes.SIGNED_IN);
});

export default {
  appInit,
  appSignedInInit,
  appToggleLoading,
  appSetSuccessMessage,
};

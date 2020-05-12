import OneSignal from 'react-native-onesignal';
import Config from 'react-native-config';
import R from 'ramda';
import { AsyncStorage } from 'react-native';

import navigation, { showModal } from '../navigation';
import ApolloClient, { closeWsConnection } from '../modules';
import {
  notificationsTypes,
  screens,
  storageKeys,
  routes,
  tokens as tokensConst,
} from '../constants';
import { restApi, tokens } from '../services';
import delay from '../utils/delay';

const toNotificationScreen = async (profileId, config) => {
  try {
    await delay(300);
    if (profileId) {
      await tokens.set(tokensConst.ID_PROFILE, profileId);
      await ApolloClient.resetStore();
      closeWsConnection();
    }
    navigation.toRoute(routes.LOADING);
    await delay(300);
    navigation.toRoute(routes.SIGNED_IN, config);
  } catch (error) {
    //
  }
};

class Notification {
  init() {
    OneSignal.init(Config.ONESIGNAL_APPID);
    OneSignal.setSubscription(true);
    OneSignal.inFocusDisplaying(2);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
  }
  removeListeners() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  isNotificationsSilent = () => AsyncStorage.getItem(storageKeys.pushNotificationSound)
    .then(R.equals('silent'));
  
  makeNotificationsSilent = async (on) => {
    const token = await AsyncStorage.getItem(storageKeys.pushNotificationToken);
    if (token) {
      await restApi.pushSound(token, on ? 0 : 1);
    }
    if (on) {
      return AsyncStorage.setItem(storageKeys.pushNotificationSound, 'silent');
    }
    return AsyncStorage.removeItem(storageKeys.pushNotificationSound);
  }

  onChangeState = (callBack) => {
    this.onIds = callBack;

    OneSignal.getPermissionSubscriptionState(callBack);
    OneSignal.addEventListener('ids', callBack);
  };

  onReceived(notification) { // eslint-disable-line
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) { // eslint-disable-line
    const {
      place_id, // eslint-disable-line
      type,
      chatId,
      profileId,
      albumId,
      toProfileId,
    } = R.pathOr({}, ['notification', 'payload', 'additionalData'], openResult);

    if (notificationsTypes.place === +type && place_id) { // eslint-disable-line
      showModal(screens.SpotsNotification, {
        passProps: {
          id: +place_id, // eslint-disable-line
        },
      });
    }
    if (type === notificationsTypes.message && chatId) {
      toNotificationScreen(toProfileId, {
        tabConfigs: {
          dialogs: {
            name: screens.Dialog,
            passProps: {
              interlocutorId: chatId,
            },
          },
        },
        currentTabIndex: 2,
      });
    }
    if ([notificationsTypes.friendRequest, notificationsTypes.friendAccepted].includes(type) && profileId) {
      toNotificationScreen(toProfileId, {
        tabConfigs: {
          dialogs: {
            name: screens.Profile,
            passProps: {
              id: profileId,
            },
          },
        },
        currentTabIndex: 2,
      });
    }
    if (notificationsTypes.albumAccessGranted === type && albumId) {
      toNotificationScreen(toProfileId, {
        tabConfigs: {
          other: {
            name: screens.Album,
            passProps: {
              albumId,
            },
          },
        },
        currentTabIndex: 4,
      });
    }
    if (notificationsTypes.albumAccessRequest === type) {
      toNotificationScreen(toProfileId, {
        tabConfigs: {
          other: {
            name: screens.AlbumAccess,
          },
        },
        currentTabIndex: 4,
      });
    }

    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  async unsubscribe() { // eslint-disable-line
    this.removeListeners();
    OneSignal.setSubscription(false);

    try {
      const token = await AsyncStorage.getItem(storageKeys.pushNotificationToken);
      await restApi.unregisterPush(token);
      await AsyncStorage.removeItem(storageKeys.pushNotificationToken);
    } catch (error) {
      console.log(`Cannot unsubscribe from Push Notifications: ${error}`);
    }
  }
}

const notification = new Notification();

export default notification;

import P from 'react-native-permissions';
import { Alert } from 'react-native';

import { permission as resPermission } from '../constants';

const p = {
  photo: {
    name: 'photo',
    title: 'Can we access your photos?',
    text: 'We need access so you can add pic to place',
  },
  location: {
    name: 'location',
    title: 'Can we access your location ?',
    text: 'This app requires user location.',
  },
  contacts: {
    name: 'contacts',
    title: 'Inviting friends',
    text: 'Usage contacts for inviting friends',
  },
  camera: {
    name: 'camera',
    title: 'Can we access your camera?',
    text: 'We need access so you can take photos and send them in chats',
  },
};

class Permissions {
  openSettings = async () => {
    const canOpenSettings = await P.canOpenSettings(); // eslint-disable-line
    
    if (canOpenSettings) {
      P.openSettings();
    }
  }
  _onDenied = permission => res => new Promise(async (resolve, reject) => {
    const canOpenSettings = await P.canOpenSettings(); // eslint-disable-line
    const { title, text } = p[permission];

    Alert.alert(title, text, [{
      text: 'No',
      onPress: () => reject(res),
      style: 'cancel',
    }, canOpenSettings ? {
      text: 'Open Settings',
      onPress: async () => {
        await P.openSettings();
        reject(res);
      },
    } : {}]);
  });

  _onUndetermined = (name, options) => () => new Promise(async (resolve, reject) => {
    const res = await P.request(name, options);
    res === resPermission.authorized ? resolve(res) : reject(res);
  });

  ask = async (permission, options = {}) => {
    const { name } = p[permission];
    const res = await P.check(name);

    const call = ({
      [resPermission.authorized]: Promise.resolve,
      [resPermission.restricted]: Promise.reject,
      [resPermission.denied]: this._onDenied(name),
      [resPermission.undetermined]: this._onUndetermined(permission, options),
    })[res];

    const r = await call(res);

    return r;
  };
}

const permissions = new Permissions();

export default permissions;

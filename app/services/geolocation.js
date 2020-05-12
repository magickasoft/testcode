import BG from 'react-native-background-geolocation';
import Config from 'react-native-config';
import R from 'ramda';
import { AsyncStorage } from 'react-native';

import tokens from './tokens';
import { isFunc } from '../utils/helpers/checkTypes';
import { getHeaders } from '../utils/headers';
import { screens } from '../constants';

const {
  DESIRED_ACCURACY_HIGH,
  LOG_LEVEL_VERBOSE,
  LOG_LEVEL_OFF,
} = BG;

// EXAMPLE OBJECT

// const log = {
//   log:[{
//     coords: {
//       speed:6.9100000000000001,
//       longitude: -122.0281456,
//       floor:0,
//       latitude:37.330221260000002,
//       accuracy:10,
//       altitude_accuracy: -1,
//       altitude:0,
//       heading: 94.120000000000005
//     },
//     extras :[],
//     is_moving:false,
//     event: "motionchange",
//     odometer: 1562711.8999999999,
//     uuid: "25F60392-E6CE-4CB0-90B4-C2990538C439",
//     activity:{
//       type: "unknown",
//       confidence:100
//     },
//     battery:{
//       level: -1,
//       is_charging: false,
//     },
//     timestamp: "2018-11-20T08:12:35.094Z",
//   }]
// };

const alert = {
  titleWhenOff: 'Your location services are off, you should enable them to continue using this app',
  titleWhenNotEnabled: 'Your location services are not enabled, you should enable them' +
  ' to continue using this app',
  instructions: "You must enable 'Always' in location-services, buddy",
  cancelButton: 'Cancel',
  settingsButton: 'Settings',
};

const defaultConfigs = {
  reset: true,
  distanceFilter: 45,
  stopOnStationary: false,
  stopTimeout: 3,
  disableStopDetection: false,

  desiredAccuracy: DESIRED_ACCURACY_HIGH,
  debug: false, // eslint-disable-line
  logLevel: __DEV__ ? LOG_LEVEL_VERBOSE : LOG_LEVEL_OFF, // eslint-disable-line
  stopOnTerminate: false,
  startOnBoot: true,
  activityRecognitionInterval: 45000, // 30000
  minimumActivityRecognitionConfidence: 92,

  // ANDROID
  locationUpdateInterval: 15000,
  allowIdenticalLocations: true,

  // IOS
  stationaryRadius: 30, // 25
  useSignificantChangesOnly: false,
  locationAuthorizationRequest: 'Always',
  locationAuthorizationAlert: alert,
  // preventSuspend: true,
  // HTTP
  headers: {},
  httpRootProperty: 'log',
  method: 'POST',
  url: `${Config.REST_API_BASE_URL}/api/profile/set-place-location`,
  autoSync: true,
  autoSyncThreshold: 1,
  batchSync: true,
  maxBatchSize: 25,
  maxDaysToPersist: 15,
};

class Geolocation {
  constructor() {
    this.subscribersOnLocation = [];
    this._currentLocation = null;
    this._configure = { ...defaultConfigs };
  }

  setHeaders = async () => {
    const [
      AUTH_TOKEN,
      ID_PROFILE,
    ] = await tokens.getAll();

    if (AUTH_TOKEN && ID_PROFILE) {
      this._configure.headers = getHeaders({ AUTH_TOKEN, ID_PROFILE });
    }
  };

  setConfig = async () => {
    const valueString = await AsyncStorage.getItem(screens.SettingGeolocations);
    const value = JSON.parse(valueString);

    this._configure = {
      ...defaultConfigs,
      ...value,
    };
  };

  init = () => new Promise((async (resolve, reject) => {
    this._addListeners();

    await Promise.all([
      this.setHeaders(),
      this.setConfig(),
    ]);

    await BG.ready(this._configure, resolve, reject);
  }));

  setUserId = async (userId) => { //eslint-disable-line
    this._configure.headers.pushUserId = userId;
    await BG.setConfig(this._configure);
  };

  stop = async () => { //eslint-disable-line
    await BG.stop();
  };

  start = () => new Promise((async (resolve, reject) => {
    await BG.start(resolve, reject);
  }));

  getCurrentPosition = async () => {
    let location = null;

    if (this._currentLocation) {
      location = await Promise.resolve(this._currentLocation);
    } else {
      const config = {
        timeout: 30,
        maximumAge: 5000,
        desiredAccuracy: 10,
        samples: 3,
      };
      await this.start();
      location = await BG.getCurrentPosition(config);
    }

    return location;
  };

  sync = (success, fail) => { //eslint-disable-line
    BG.sync(success, fail);
  };

  // @Events
  _addListeners = () => {
    BG.onLocation(this._onLocation, this._onError);
    // BG.onHttp(this._onHttp);
    // BG.onActivityChange(this._onActivityChange);
  };
  _onLocation = location => {
    this._currentLocation = location;

    if (!R.isEmpty(this.subscribersOnLocation)) {
      const func = f => {
        f(this._currentLocation);
      };

      R.forEach(func, this.subscribersOnLocation);
    }
  };
  onLocation = callBack => {
    if (isFunc(callBack)) {
      this.subscribersOnLocation.push(callBack);
      callBack(this._currentLocation || {});
    }
  };
  // _onHttp = response => {
  //   Reactotron.log('[Geolocation.onHttp]', response);
  // };
  // _onActivityChange = event => {
  //   Reactotron.log('[Geolocation._onActivityChange] ', event);
  // }
  _onError = err => {
    console.log('[Geolocation.onError]', err);
  }

  getActualConfig = () => R.omit(['headers'], this._configure);
  // _getLog = async () => {
  //   await BG.getLog((log) => {
  //     Reactotron.log('[log] ', log);
  //   });
  // }
}

const geolocation = new Geolocation();

export default geolocation;


import SInfo from 'react-native-sensitive-info';
import R from 'ramda';

const addAppName = (storageName) => `@communitya:${storageName}`;

export default class SecureStorage {
  constructor(tokens) {
    this.listeners = [];
    this.config = {
      keychainService: 'communitya'
    };

    this.keys = R.map((el) => addAppName(el), tokens);
    this._keysArray = Object.keys(tokens);

    this.caches = R.map(() => null, tokens);
  }

  set = async (key, value) => {
    this.caches[key] = value;
    this._send();

    await SInfo.setItem(this.keys[key], JSON.stringify(value), this.config);
  };

  get = async (key) => {
    if (this.caches[key]) {
      return Promise.resolve(this.caches[key]);
    }

    try {
      const valueString = await SInfo.getItem(this.keys[key], this.config);

      const value = JSON.parse(valueString);

      this.caches[key] = value;
      this._send();

      return value;
    } catch (e) {
      return null;
    }
  };

  remove = async (key) => {
    this.caches[key] = null;
    this._send();

    await SInfo.deleteItem(this.keys[key], this.config);
  };


  // LISTENERS
  onChange = (callBack) => {
    this.listeners.push(callBack);
    callBack(this.caches);
  };

  _send = () => {
    R.forEach((callBack) => (
      callBack(this.caches)
    ), this.listeners);
  }
}

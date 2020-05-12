import R from 'ramda';
import { AsyncStorage } from 'react-native';
import tokens from './tokens';
import { tokens as constTokens } from '../constants';
// @events
// change

// TODO: NEED TO REFACTORING

const {
  ID_PROFILE,
} = constTokens;

class Theme {
  constructor(all) {
    this._all = all;
    this._current = {};
    this._index = 1;
    this.subscribers = {};
    this.prevProfileId = null;
  }

  subscribe = (type, fn) => {
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }

    this.subscribers[type].push(fn);

    this._send('change', this._current);
  };

  _send = (type, data) => {
    if (typeof this.subscribers[type] !== 'undefined') {
      R.forEach(el => el(data), this.subscribers[type]);
    }
  };

  init = (themes, index) => {
    this._all = themes;
    this._index = index;
    this._current = this._all[index];

    tokens.onChange((values) => {
      if (values[ID_PROFILE] !== this.prevProfileId) {
        this.getFromStorage().done();
        this.prevProfileId = values[ID_PROFILE];
      }
    });
  };

  get = () => this._current;
  getIndex = () => this._index;
  getAll = () => this._all;

  changeTheme = newIndex => {
    if (newIndex !== this._current) {
      this._index = newIndex;
      this._current = this._all[newIndex];

      this._send('change', this._current);
      this.saveToStorage().done();
    }
  };

  changePrimaryColor = newPrimaryColor => {
    if (this._current.activePrimary !== newPrimaryColor) {
      this._current.activePrimary = newPrimaryColor;

      this._send('change', this._current);
      this.saveToStorage().done();
    }
  };

  // async storage
  saveToStorage = async () => {
    const profileId = await tokens.get(constTokens.ID_PROFILE);
    const value = JSON.stringify(R.pick(['_current', '_index'], this));
    await AsyncStorage.setItem(`theme-${profileId}`, value);
  };
  getFromStorage = async () => {
    const profileId = await tokens.get(constTokens.ID_PROFILE);

    const saved = await AsyncStorage.getItem(`theme-${profileId}`);

    if (saved) {
      const theme = JSON.parse(saved);
      this._current = theme._current;
      this._index = theme._index;
    } else {
      this._current = this._all[1]; // eslint-disable-line
      this._index = 1;
    }

    this._send('change', this._current);
  };
}

const theme = new Theme();

export default theme;

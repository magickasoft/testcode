import R from 'ramda';

import {
  tokens as constTokens,
} from '../constants';

import SecureStorage from '../utils/servicesTemplate/SecureStorage';

class Tokens extends SecureStorage {
  constructor(namesStorage) { // eslint-disable-line
    super(namesStorage);
  }
  getAll = () => this._all(this.get);
  removeAll = () => this._all(this.remove);

  _all = async action => Promise.all(
    R.map(async el => {
      const value = await action(el);
      return value;
    }, this._keysArray)
  );
}

const tokens = new Tokens(constTokens);

export default tokens;

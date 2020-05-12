import R from 'ramda';
import providers from '../constants/providers';

class Factory {
  initUser = (data, provider) => {
    let initUser;

    switch (provider) {
      case providers.facebook:
        initUser = {
          name: R.pathOr('', ['first_name'], data),
          lastName: R.pathOr('', ['last_name'], data),
          birthday_date: null
        };
        break;
      case providers.google:
        initUser = {
          name: R.pathOr('', ['user', 'givenName'], data),
          lastName: R.pathOr('', ['user', 'familyName'], data),
          birthday_date: null
        };
        break;
      default:
        initUser = {};
    }

    return initUser;
  }
}

export default new Factory();

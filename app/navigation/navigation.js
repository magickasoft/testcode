import { Navigation as RNNavigation } from 'react-native-navigation';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import {
  signIn,
  signOut,
  loading,
  update,
  acceptEula,
} from './routes';
import { routes as routesName } from '../constants';

const routes = {
  [routesName.SIGNED_IN]: signIn,
  [routesName.SIGNED_OUT]: signOut,
  [routesName.LOADING]: loading,
  [routesName.UPDATE]: update,
  [routesName.ACCEPT_EULA]: acceptEula,
};

class Navigation {
  constructor() {
    this.currentNavState = null;
    RNNavigation.events().registerBottomTabSelectedListener(() => {
      ReactNativeHapticFeedback.trigger('selection');
    });
  }
  toRoute = (routeName, tabConfigs) => {
    if (this.currentNavState !== routeName) {
      routes[routeName](tabConfigs);
      this.currentNavState = routeName;
    }
  };
}
const navigation = new Navigation();

export default navigation;


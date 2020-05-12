/* eslint-disable */
import React from 'react';
// import { Navigation } from 'react-native-navigation';
import Config from 'react-native-config';
// import Geocoder from 'react-native-geocoding';
import { AsyncStorage, Text } from 'react-native';
import 'react-native-gesture-handler';
// import I18n from 'react-native-i18n';
// import { date } from '@utils/helpers';

// import './localization';
import { View} from 'react-native';
// import { store } from './store';
// import { appOperations } from './store/app';
// import { notification } from './services';
// import navigation from './navigation';
// import registerScreens from './navigation/registersScreens';
// import apolloClient from './modules';
// import bugsnag from './bugsnag';
// import { routes as routesName, storageKeys } from './constants';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

console.ignoredYellowBox = ['Warning: isMounted'];
console.ignoredYellowBox = ['Warning: Failed prop type: Invalid prop `onHandlerStateChange`'];
console.ignoredYellowBox = ['Attempted to invoke'];
// https://github.com/facebook/react-native/issues/20926

// Geocoder.init(Config.DIRECTION_API_KEY, { language: date.getDateLocale() });

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.init();
  // }
  //
  // init() {
  //   AsyncStorage.getItem(storageKeys.appLanguage)
  //     .then((lang) => {
  //       if (lang) {
  //         I18n.locale = lang;
  //       }
  //     });
  //   registerScreens(apolloClient, store, bugsnag);
  //
  //   Navigation.events().registerAppLaunchedListener(async () => {
  //     navigation.toRoute(routesName.LOADING);
  //     store.dispatch(appOperations.appInit());
  //   });
  // }
  //
  // componentWillUnmount() {
  //   notification.removeListeners();
  // }
render() {
  return (<View/>);
}
}



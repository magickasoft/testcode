import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { AsyncStorage } from 'react-native';
import RNExitApp from 'react-native-exit-app';

import AppInformation from './AppInformation';
import { storageKeys, routes } from '../../constants';
import navigation from '../../navigation';
import { store } from '../../store';
import { appOperations } from '../../store/app';

import {
  withTheme,
} from '../../utils/enhancers';

import s from './style';

const enhance = compose(
  withTheme(s),
  withHandlers({
    onAccept: () => async () => {
      await AsyncStorage.setItem(storageKeys.isEulaAccepted, 'yes');
      navigation.toRoute(routes.LOADING);
      store.dispatch(appOperations.appInit());
    },
    onDecline: () => () => RNExitApp.exitApp(),
  }),
);

export default hoistStatics(enhance)(AppInformation);

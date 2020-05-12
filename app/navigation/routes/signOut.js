import { Navigation } from 'react-native-navigation';
import { screens } from '../../constants';
import setDefaultOptions from '../setDefaultOptions';

export default () => {
  setDefaultOptions();

  Navigation.setRoot({
    root: {
      stack: {
        id: screens.OnBoarding,
        children: [
          {
            component: {
              name: screens.OnBoarding,
            },
          },
        ],
      },
    },
  });
};

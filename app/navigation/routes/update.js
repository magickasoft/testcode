import { Navigation } from 'react-native-navigation';
import { screens } from '../../constants';

export default () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: screens.Update,
        children: [
          {
            component: {
              name: screens.Update,
            },
          },
        ],
      },
    },
  });
};

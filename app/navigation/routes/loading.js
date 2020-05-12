import { Navigation } from 'react-native-navigation';
import { screens } from '../../constants';

export default () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: screens.RootLoading,
        children: [
          {
            component: {
              name: screens.RootLoading,
            },
          },
        ],
      },
    },
  });
};

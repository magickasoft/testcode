import { Navigation } from 'react-native-navigation';
import { screens } from '../../constants';

export default () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: screens.AppInformation,
        children: [
          {
            component: {
              name: screens.AppInformation,
              passProps: {
                displayType: 'eula',
                displayButtons: true,
              },
            },
          },
        ],
      },
    },
  });
};

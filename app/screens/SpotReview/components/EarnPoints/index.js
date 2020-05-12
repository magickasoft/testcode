import { compose, withHandlers } from 'recompose';
import { Navigation } from 'react-native-navigation';
import { screens } from '@constants';
import EarnPoints from './EarnPoints';

const enhance = compose(
  withHandlers({
    onGoToSpotsNotification: ({ id }) => () => {
      Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: screens.SpotsNotification,
              passProps: { id }
            }
          }]
        }
      });
    }
  }),
);

export default enhance(EarnPoints);

import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';

import Feed from './Feed';
import { screens } from '../../../../constants';

const enhance = compose(
  withHandlers({
    onGoToReview: props => id => {
      props.navigator.push(screens.SpotReview, {
        passProps: { id },
      });
    },
  }),
);

export default hoistStatics(enhance)(Feed);

import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import ViewScreen from './ViewScreen';

const enhance = compose(
  withHandlers({
    onGoToReview: () => () => {
    // props.navigator.push(screens.SpotsReview);
    },
  }),
);

export default hoistStatics(enhance)(ViewScreen);

import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import ViewScreen from './ViewScreen';
import screens from '../../../../constants/screens';

const enhance = compose(
  withHandlers({
    onGoToReview: props => () => {
      props.navigator.push(screens.SpotReview);
    },
  }),
);

export default hoistStatics(enhance)(ViewScreen);

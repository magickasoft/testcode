/* eslint-disable */
import {
  compose,
  hoistStatics,
  withHandlers, withState,
} from 'recompose';
import ViewScreen from './ViewScreen';
import screens from "../../../../constants/screens";

const enhance = compose(
  withHandlers({
    onGoToReview: props => () => {
      // props.navigator.push(screens.SpotsReview);
    },
  }),
);

export default hoistStatics(enhance)(ViewScreen);

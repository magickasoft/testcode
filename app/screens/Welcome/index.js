import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
// import navigation from '@navigation';

import { withTheme } from '@utils/enhancers';

import Welcome from './Welcome';
import { appOperations } from '../../store/app';
import s from './style';
// import { routes } from '../../constants';

const enhance = compose(
  connect(null, appOperations),
  withHandlers({
    back: props => async () => {
      props.navigator.dismissModal();
      // navigation.toRoute(routes.SIGNED_IN);
    },
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(Welcome);

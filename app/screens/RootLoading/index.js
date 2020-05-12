import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';

import RootLoading from './RootLoading';
import { errOperations } from '../../store/error';

const enhance = compose(
  connect(
    ({ error }) => ({ error: error.auth }),
    errOperations,
  ),
);

export default hoistStatics(enhance)(RootLoading);


import * as actions from './actions';
import { ReduxError } from '../../utils/error';

const errSetApp = e => dispatch => {
  dispatch(actions.errSetApp(new ReduxError(e)));
};

const errSetAuth = e => dispatch => {
  dispatch(actions.errSetAuth(new ReduxError(e)));
};

const errSetUser = e => dispatch => {
  dispatch(actions.errSetUser(new ReduxError(e)));
};

const errSetSpot = e => dispatch => {
  dispatch(actions.errSetSpot(new ReduxError(e)));
};

export default {
  errSetApp,
  errSetSpot,
  errSetAuth,
  errSetUser,
  errResetAll: actions.errResetAll,
  errSetGraphql: actions.errSetGraphql,
  errSetNetwork: actions.errSetNetwork,
};

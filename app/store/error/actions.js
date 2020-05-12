import { createActions } from 'redux-actions';
import types from './types';

export const {
  errSetApp,
  errSetAuth,
  errSetUser,
  errSetSpot,
  errSetGraphql,
  errSetNetwork,
  errResetAll,
} = createActions(
  types.ERR_SET_APP,
  types.ERR_SET_AUTH,
  types.ERR_SET_USER,
  types.ERR_SET_SPOT,
  types.ERR_SET_GRAPHQL,
  types.ERR_SET_NETWORK,
  types.ERR_RESET_ALL,
);


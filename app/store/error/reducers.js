import { handleActions } from 'redux-actions';
import types from './types';
import { merge } from '../../utils/helpers/store';

const initialState = {
  app: null,
  auth: null,
  user: null,
  spot: null,
  graphql: null,
  network: null,
};

const authReducer = handleActions(
  {
    [types.ERR_RESET_ALL]: merge({ ...initialState }),
    [types.ERR_SET_APP]: merge((state, action) => ({
      app: action.payload,
    })),
    [types.ERR_SET_AUTH]: merge((state, action) => ({
      auth: action.payload,
    })),
    [types.ERR_SET_USER]: merge((state, action) => ({
      user: action.payload,
    })),
    [types.ERR_SET_SPOT]: merge((state, action) => ({
      spot: action.payload,
    })),
    [types.ERR_SET_GRAPHQL]: merge((state, action) => ({
      graphql: action.payload,
    })),
    [types.ERR_SET_NETWORK]: merge((state, action) => ({
      network: action.payload,
    })),
  },
  initialState,
);

export default authReducer;

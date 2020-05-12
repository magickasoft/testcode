import { createActions } from 'redux-actions';
import types from './types';

export const {
  authToggleLoading,
  authSetSignedUp,
  authSetMessage,
} = createActions(
  types.AUTH_TOGGLE_LOADING,
  types.AUTH_SET_SIGNED_UP,
  types.AUTH_SET_MESSAGE,
);


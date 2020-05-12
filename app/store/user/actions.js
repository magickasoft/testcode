import { createActions } from 'redux-actions';
import types from './types';

export const {
  userSet,
  userToggleLoading,
  userSetMessageLinked,
  userSetBalance,
  userSetIdProfile,
  userSetInitialUser,
} = createActions(
  types.USER_SET,
  types.USER_TOGGLE_LOADING,
  types.USER_SET_MESSAGE_LINKED,
  types.USER_SET_BALANCE,
  types.USER_SET_ID_PROFILE,
  types.USER_SET_INITIAL_USER,
);


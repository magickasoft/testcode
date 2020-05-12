import { createActions } from 'redux-actions';
import types from './types';

export const {
  appToggleLoading,
  appSetSuccessMessage,
} = createActions(
  types.APP_TOGGLE_LOADING,
  types.APP_SET_SUCCESS_MESSAGE,
);


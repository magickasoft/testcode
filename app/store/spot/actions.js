import { createActions } from 'redux-actions';
import types from './types';

export const {
  spotToggleLoading,
} = createActions(
  types.SPOT_TOGGLE_LOADING,
);


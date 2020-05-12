import { handleActions } from 'redux-actions';
import types from './types';
import { merge } from '../../utils/helpers/store';

const initialState = {
  isLoading: false,
  message: null,
};

const authReducer = handleActions(
  {
    [types.AUTH_TOGGLE_LOADING]: merge((state, action) => ({
      isLoading: action.payload,
    })),
    [types.AUTH_SET_MESSAGE]: merge((state, action) => ({
      message: action.payload,
    })),
  },
  initialState,
);

export default authReducer;

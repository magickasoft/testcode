import { handleActions } from 'redux-actions';
import types from './types';
import { merge } from '../../utils/helpers/store';

const initialState = {
  isLoading: false,
  message: null,
};

const appReducer = handleActions(
  {
    [types.APP_TOGGLE_LOADING]: merge(state => ({
      isLoading: !state.isLoading,
    })),
    [types.APP_SET_SUCCESS_MESSAGE]: merge((state, action) => ({
      message: action.payload,
    })),
  },
  initialState,
);

export default appReducer;

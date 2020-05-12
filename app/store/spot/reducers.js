import { handleActions } from 'redux-actions';
import types from './types';
import { merge } from '../../utils/helpers/store';

const initialState = {
  isLoading: false,
};

const spotReducer = handleActions(
  {
    [types.SPOT_TOGGLE_LOADING]: merge(state => ({
      isLoading: !state.isLoading,
    })),
  },
  initialState,
);

export default spotReducer;

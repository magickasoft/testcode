import { handleActions } from 'redux-actions';
import types from './types';
import { merge } from '../../utils/helpers/store';

const initialState = {
  isLoading: false,
  messageLinked: null,
  balance: 0,
  idProfile: -1,
  userInitial: {
    name: '',
    lastName: '',
    birthday_date: null,
  },
};

const userReducer = handleActions(
  {
    [types.USER_SET]: merge((state, action) => ({
      ...action.payload,
    })),
    [types.USER_TOGGLE_LOADING]: merge(state => ({
      isLoading: !state.isLoading,
    })),
    [types.USER_SET_MESSAGE_LINKED]: merge((state, action) => ({
      messageLinked: action.payload,
    })),
    [types.USER_SET_BALANCE]: merge((state, action) => ({
      balance: action.payload,
    })),
    [types.USER_SET_ID_PROFILE]: merge((state, action) => ({
      idProfile: action.payload,
    })),
    [types.USER_SET_INITIAL_USER]: merge((state, action) => ({
      userInitial: {
        ...state.userInitial,
        ...action.payload,
      },
    })),
  },
  initialState,
);

export default userReducer;

import store from 'store';
import { logoutActionTypes } from 'modules/auth/logout/constants';
import { loginActionTypes } from 'modules/auth/login/constants';
import { createReducer } from 'utils/redux';
import { isDateExpired } from 'utils/date';

const storeToken = store.get('authToken') || {};

const authTokenReducerInitialState = isDateExpired(storeToken.expirationTime) ? {} : storeToken;

export const token = createReducer({
  initialState: authTokenReducerInitialState,
  actions: {
    [loginActionTypes.LOGIN_SET_TOKEN]: (state, payload) => payload,
    [logoutActionTypes.AUTH_LOGOUT]: () => ({})
  }
});

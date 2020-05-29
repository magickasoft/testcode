import { put, delay, spawn, select } from 'redux-saga/effects';
import { authTokenSelector } from 'modules/auth/selectors';
import { isDateExpired } from 'utils/date';
import { logout } from '../logout/actions';

function* tokenWatcher() {
  while (true) {
    const token = yield select(authTokenSelector);

    if (token?.expirationTime) {
      if (isDateExpired(token.expirationTime)) {
        yield put(logout());
      }
    }

    yield delay(1000);
  }
}

export function* tokenExpirationSaga() {
  yield spawn(tokenWatcher);
}

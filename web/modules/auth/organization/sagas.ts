import { takeLatest, call, put } from 'redux-saga/effects';
import { organizationActionTypes } from './constants';
import { getOrganization } from './effects';
import { setOrganization } from './actions';

function* organizationHandler() {
  try {
    const response = yield call(getOrganization);
    yield put(setOrganization(response));
  } catch (error) {
    yield put(setOrganization(null));
  }
}

export function* organizationSaga() {
  yield takeLatest(organizationActionTypes.GET_ORGANIZATION, organizationHandler);
}

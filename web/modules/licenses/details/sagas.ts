import { createReadSaga } from 'utils/api/read';
import { spawn, put, takeLatest } from 'redux-saga/effects';
import { forceTableUpdate } from 'modules/tables';
import { licenseDetailsActionsTypes, licenseDetailsActions } from './actions';
import { licenseDetailsApi } from './api';

function* licenseLoadedHandler() {
  yield put(forceTableUpdate('documents', true));
}

export function* licenseDetailsSaga() {
  yield spawn(createReadSaga(licenseDetailsActionsTypes, licenseDetailsActions, licenseDetailsApi));
  yield takeLatest(licenseDetailsActionsTypes.read.completed, licenseLoadedHandler);
}

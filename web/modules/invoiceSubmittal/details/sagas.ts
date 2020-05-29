import { createReadSaga } from 'utils/api/read';
import { spawn, takeLatest } from 'redux-saga/effects';
import { invoiceSubmittalDetailsActionsTypes, invoiceSubmittalDetailsActions } from './actions';
import { invoiceSubmittalDetailsApi } from './api';

function* invoiceSubmittalDetailsLoadedHandler() {}

export function* invoiceSubmittalDetailsSaga() {
  yield spawn(
    createReadSaga(invoiceSubmittalDetailsActionsTypes, invoiceSubmittalDetailsActions, invoiceSubmittalDetailsApi)
  );
  yield takeLatest(invoiceSubmittalDetailsActionsTypes.read.completed, invoiceSubmittalDetailsLoadedHandler);
}

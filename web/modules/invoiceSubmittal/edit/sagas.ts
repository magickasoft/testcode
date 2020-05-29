import { fork, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { createWriteSaga } from 'utils/api';
import { history } from 'modules/router';
import { MAIN_PATH } from 'modules/main';
import { invoiceSubmittalDetailsActionsTypes } from 'modules/invoiceSubmittal/details';
import { invoiceSubmittalEditActionTypes, invoiceSubmittalEditActions } from './actions';
import { invoiceSubmittalEditApi } from './api';
import { invoiceSubmittalFormSelector } from './selectors';

function* formInitializeHandler(action) {
  const invoiceSubmittalEditForm = yield select(invoiceSubmittalFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = invoiceSubmittalEditForm.setValue(value).setInitialValue(value).ready();
    yield put(invoiceSubmittalEditActions.value.set(form));
  }
}

function* writeCompletedSaga(action) {
  yield call(history.push, `${MAIN_PATH}/invoiceSubmittal/details/${action.payload.id}` as any);
}

export function* editInvoiceSubmittalFormSaga() {
  yield takeEvery(invoiceSubmittalEditActionTypes.write.completed, writeCompletedSaga);
  yield takeLatest(invoiceSubmittalDetailsActionsTypes.read.completed, formInitializeHandler);
  yield fork(createWriteSaga(invoiceSubmittalEditActionTypes, invoiceSubmittalEditActions, invoiceSubmittalEditApi));
}

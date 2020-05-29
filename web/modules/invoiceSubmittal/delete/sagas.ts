import { spawn, takeLatest } from 'redux-saga/effects';
import { history } from 'modules/router';
import { createDeleteSaga } from 'utils/api/delete';
import { MAIN_ALERTS_PATH } from 'modules/main';
import { invoiceSubmittalDeleteActionsTypes, invoiceSubmittalDeleteActions } from './actions';
import { invoiceSubmittalDeleteApi } from './api';

function invoiceSubmittalDeletedHandler() {
  history.push(MAIN_ALERTS_PATH);
}

export function* invoiceSubmittalDeletionSaga() {
  yield spawn(
    createDeleteSaga(invoiceSubmittalDeleteActionsTypes, invoiceSubmittalDeleteActions, invoiceSubmittalDeleteApi)
  );
  yield takeLatest(invoiceSubmittalDeleteActionsTypes.delete.completed, invoiceSubmittalDeletedHandler);
}

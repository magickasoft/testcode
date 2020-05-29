import { spawn, takeLatest } from 'redux-saga/effects';
import { history } from 'modules/router';
import { createDeleteSaga } from 'utils/api/delete';
import { MAIN_ALERTS_PATH } from 'modules/main';
import { taxReconcilliationDeleteActionsTypes, taxReconcilliationDeleteActions } from './actions';
import { taxReconcilliationDeleteApi } from './api';

function taxReconcilliationDeletedHandler() {
  history.push(MAIN_ALERTS_PATH);
}

export function* taxReconcilliationDeletionSaga() {
  yield spawn(
    createDeleteSaga(taxReconcilliationDeleteActionsTypes, taxReconcilliationDeleteActions, taxReconcilliationDeleteApi)
  );
  yield takeLatest(taxReconcilliationDeleteActionsTypes.delete.completed, taxReconcilliationDeletedHandler);
}

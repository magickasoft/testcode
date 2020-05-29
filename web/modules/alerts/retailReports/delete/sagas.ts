import { spawn, takeLatest } from 'redux-saga/effects';
import { history } from 'modules/router';
import { createDeleteSaga } from 'utils/api/delete';
import { MAIN_ALERTS_PATH } from 'modules/main';
import { retailDeleteActionsTypes, retailDeleteActions } from './actions';
import { retailDeleteApi } from './api';

function retailDeletedHandler() {
  history.push(MAIN_ALERTS_PATH);
}

export function* retailDeletionSaga() {
  yield spawn(createDeleteSaga(retailDeleteActionsTypes, retailDeleteActions, retailDeleteApi));
  yield takeLatest(retailDeleteActionsTypes.delete.completed, retailDeletedHandler);
}

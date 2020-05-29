import { spawn, takeLatest } from 'redux-saga/effects';
import { history } from 'modules/router';
import { createDeleteSaga } from 'utils/api/delete';
import { MAIN_ALERTS_PATH } from 'modules/main';
import { wholesaleDeleteActionsTypes, wholesaleDeleteActions } from './actions';
import { wholesaleDeleteApi } from './api';

function wholesaleDeletedHandler() {
  history.push(MAIN_ALERTS_PATH);
}

export function* wholesaleDeletionSaga() {
  yield spawn(createDeleteSaga(wholesaleDeleteActionsTypes, wholesaleDeleteActions, wholesaleDeleteApi));
  yield takeLatest(wholesaleDeleteActionsTypes.delete.completed, wholesaleDeletedHandler);
}

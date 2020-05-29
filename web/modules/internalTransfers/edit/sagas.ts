import { createDeleteSaga } from 'utils/api/delete/index';
import { createWriteSaga } from 'utils/api/write/index';
import { takeLatest, put, spawn, call, select } from 'redux-saga/effects';
import { forceTableUpdate } from 'modules/tables';
import { INTERNAL_TRANSFERS_LIST_PAGE_PATH } from 'modules/internalTransfers/list';
import { internalTransferActionType } from 'modules/internalTransfers/details/actions';
import { push } from 'modules/router/effects';
import { TransfersFilterModel } from 'modules/internalTransfers/models/TransfersFilterModel';
import { internalTransferWriteActions, internalTransferDeleteActions } from './actions';
import { internalTransferDeleteActionTypes, internalTransferWriteActionTypes } from './constants';
import { internalTransferDeleteApi, internalTransferWriteApi } from './api';
import { internalTransferFormSelector } from './selectors';

/**
 * Form initialization.
 */

function* formInitializeHandler(action) {
  const internalTransferForm = yield select(internalTransferFormSelector.getEntity);
  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = internalTransferForm.setValue(value).setInitialValue(value).ready();
    yield put(internalTransferWriteActions.value.set(form));
  }
}

function* internalTransferFormSaga() {
  yield takeLatest(internalTransferActionType.read.completed, formInitializeHandler);
}

/**
 * Internal transfer deletion.
 */

function* deleteCompletedHandler() {
  yield put(forceTableUpdate('internal-transfers'));
  yield call(push, INTERNAL_TRANSFERS_LIST_PAGE_PATH);
}

function* internalTransferDeletionSaga() {
  yield spawn(
    createDeleteSaga(internalTransferDeleteActionTypes, internalTransferDeleteActions, internalTransferDeleteApi)
  );

  yield takeLatest(internalTransferDeleteActionTypes.delete.completed, deleteCompletedHandler);
}

/**
 * Update internal transfer.
 */

function* addCompletedHandler() {
  const form = yield select(internalTransferFormSelector.getEntity);
  yield call(push, `${INTERNAL_TRANSFERS_LIST_PAGE_PATH}/${form.getValue().id}`);
}

export function* internalTransferUpdateSaga() {
  yield spawn(
    createWriteSaga(internalTransferWriteActionTypes, internalTransferWriteActions, internalTransferWriteApi)
  );

  yield takeLatest(internalTransferWriteActionTypes.write.completed, addCompletedHandler);
}

/**
 * Main saga.
 */

export function* manageInternalTransferSaga() {
  yield spawn(internalTransferFormSaga);
  yield spawn(internalTransferUpdateSaga);
  yield spawn(internalTransferDeletionSaga);
}

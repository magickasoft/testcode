import { createWriteSaga } from 'utils/api/write';
import { createReadSaga } from 'utils/api/read';
import { history } from 'modules/router';
import { forceTableUpdate } from 'modules/tables';
import { put, select, spawn, takeLatest } from 'redux-saga/effects';
import { INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH } from './constants';
import { internalTransferExportReadApi, internalTransferExportWriteApi } from './api';
import {
  internalTransfersExportDetailsActionTypes,
  internalTransfersExportFormActionTypes,
  internalTransfersExportDetailsActions,
  internalTransfersExportFormActions
} from './actions';
import { internalTransfersExportFormSelector } from './selectors';

function* formInitializeHandler(action) {
  const exportForm = yield select(internalTransfersExportFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = exportForm.setValue(value).setInitialValue(value).ready();
    yield put(internalTransfersExportFormActions.value.set(form));
  }
}

function* initializeFormSaga() {
  yield takeLatest(internalTransfersExportDetailsActionTypes.read.completed, formInitializeHandler);
}

function* processCompletedHandler() {
  history.push(INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH);
  yield put(forceTableUpdate('internal-transfers-export'));
}

function* processCompletedSaga() {
  yield takeLatest(internalTransfersExportFormActionTypes.write.completed, processCompletedHandler);
}

export function* internalTransfersExportSaga() {
  yield spawn(
    createWriteSaga(
      internalTransfersExportFormActionTypes,
      internalTransfersExportFormActions,
      internalTransferExportWriteApi
    )
  );
  yield spawn(
    createReadSaga(
      internalTransfersExportDetailsActionTypes,
      internalTransfersExportDetailsActions,
      internalTransferExportReadApi
    )
  );
  yield spawn(processCompletedSaga);
  yield spawn(initializeFormSaga);
}

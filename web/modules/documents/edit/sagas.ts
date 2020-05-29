import { createWriteSaga } from 'utils/api/write';
import { createUploadSaga } from 'utils/api/upload';
import { history } from 'modules/router';
import { put, select, spawn, takeLatest } from 'redux-saga/effects';
import { documentsDetailsActionsTypes } from 'modules/documents/details';
import { documentFormSelector } from 'modules/documents/edit/selectors';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import {
  documentPeriodFormActionTypes,
  documentPeriodFormActions,
  documentPeriodUploadActionTypes,
  documentPeriodUploadActions,
  documentFileFormActionTypes,
  documentFileFormActions,
  documentFormActionTypes,
  documentFormActions
} from './actions';
import { documentFileWriteApi, documentPeriodFileUploadApi, documentPeriodWriteApi, documentWriteApi } from './api';

/**
 * Form initialization.
 */

function* formInitializeHandler(action) {
  const documentForm = yield select(documentFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = documentForm.setValue(value).setInitialValue(value).ready();
    yield put(documentFormActions.value.set(form));
  }
}

/**
 * Set initial form state, when license fetch is completed.
 */

function* initializeDocumentFormSaga() {
  yield takeLatest(documentsDetailsActionsTypes.read.completed, formInitializeHandler);
}

/**
 * Redirect to details when save is completed.
 */

function writeCompletedHandler({ payload }) {
  history.push(`${DOCUMENTS_LIST_PAGE_PATH}/${payload.id}`);
}

function* writeCompletedSaga() {
  yield takeLatest(documentFormActionTypes.write.completed, writeCompletedHandler);
}

export function* editDocumentSaga() {
  yield spawn(createWriteSaga(documentPeriodFormActionTypes, documentPeriodFormActions, documentPeriodWriteApi));
  yield spawn(createWriteSaga(documentFileFormActionTypes, documentFileFormActions, documentFileWriteApi));
  yield spawn(createWriteSaga(documentFormActionTypes, documentFormActions, documentWriteApi));
  yield spawn(
    createUploadSaga(documentPeriodUploadActionTypes, documentPeriodUploadActions, documentPeriodFileUploadApi)
  );
  yield spawn(initializeDocumentFormSaga);
  yield spawn(writeCompletedSaga);
}

import { spawn, takeLatest } from 'redux-saga/effects';
import { history } from 'modules/router';
import { createDeleteSaga } from 'utils/api/delete';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import {
  documentsFileDeleteActionsTypes,
  documentsFileDeleteActions,
  documentPeriodDeleteActionsTypes,
  documentPeriodDeleteActions,
  documentDeleteActionsTypes,
  documentDeleteActions
} from './actions';
import { documentsFileDeleteApi, documentPeriodDeleteApi, documentDeleteApi } from './api';

function documentDeletedHandler() {
  history.push(DOCUMENTS_LIST_PAGE_PATH);
}

function* mainDocumentDeletionSaga() {
  yield spawn(createDeleteSaga(documentDeleteActionsTypes, documentDeleteActions, documentDeleteApi));
  yield takeLatest(documentDeleteActionsTypes.delete.completed, documentDeletedHandler);
}

export function* documentsDeletionSaga() {
  yield spawn(createDeleteSaga(documentsFileDeleteActionsTypes, documentsFileDeleteActions, documentsFileDeleteApi));
  yield spawn(createDeleteSaga(documentPeriodDeleteActionsTypes, documentPeriodDeleteActions, documentPeriodDeleteApi));
  yield spawn(mainDocumentDeletionSaga);
}

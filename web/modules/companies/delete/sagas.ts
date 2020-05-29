import { put, spawn, takeLatest } from 'redux-saga/effects';
import { history } from 'modules/router';
import { createDeleteSaga } from 'utils/api/delete';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { forceTableUpdate } from 'modules/tables';
import { companyDeleteActionsTypes, companyDeleteActions } from './actions';
import { companyDeleteApi } from './api';

function* documentDeletedHandler() {
  yield put(forceTableUpdate('companies', true));
  history.push(COMPANIES_LIST_PATH);
}

export function* companyDeletionSaga() {
  yield spawn(createDeleteSaga(companyDeleteActionsTypes, companyDeleteActions, companyDeleteApi));
  yield takeLatest(companyDeleteActionsTypes.delete.completed, documentDeletedHandler);
}

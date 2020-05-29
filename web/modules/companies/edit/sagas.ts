import { fork, call, put, select, takeEvery, takeLatest, spawn } from 'redux-saga/effects';
import { createWriteSaga } from 'utils/api';
import { createDeleteSaga } from 'utils/api/delete/index';
import { forceTableUpdate } from 'modules/tables';
import { history } from 'modules/router';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import {
  companyDetailsActionsTypes,
  contactDetailsActionsTypes,
  customerDetailsActionsTypes,
  vendorDetailsActionsTypes,
  affiliatedDetailsActionsTypes
} from 'modules/companies/details';

import {
  companyEditActionTypes,
  companyEditActions,
  contactFormActions,
  contactFormActionTypes,
  customerFormActionTypes,
  customerFormActions,
  customerDeletionActionTypes,
  customerDeletionActions,
  vendorFormActionTypes,
  vendorFormActions,
  vendorDeletionActions,
  vendorDeletionActionTypes,
  affiliatedFormActionTypes,
  affiliatedFormActions,
  affiliatedDeletionActionTypes,
  affiliatedDeletionActions
} from './actions';
import {
  companyEditApi,
  contactEditApi,
  customerDeletionApi,
  customerEditApi,
  vendorDeletionApi,
  vendorEditApi,
  affiliatedEditApi,
  affiliatedDeletionApi
} from './api';
import {
  companyFormSelector,
  contactFormSelector,
  customerFormSelector,
  vendorFormSelector,
  affiliatedFormSelector
} from './selectors';

function* companyFormInitializeHandler(action) {
  const companyEditForm = yield select(companyFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];

    const form = companyEditForm
      .setValue({
        ...value,
        holding_group_companies_ids: (value.holding_group_companies_ids || []).map((i) => i.toString())
      })
      .setInitialValue(value)
      .ready();

    yield put(companyEditActions.value.set(form));
  }
}

function* contactFormInitializeHandler(action) {
  const contactEditForm = yield select(contactFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = contactEditForm.setValue(value).setInitialValue(value).ready();
    yield put(contactFormActions.value.set(form));
  }
}

function* customerFormInitializeHandler(action) {
  const customerEditForm = yield select(customerFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = customerEditForm.setValue(value).setInitialValue(value).ready();
    yield put(customerFormActions.value.set(form));
    yield put(customerDeletionActions.value.set(form));
  }
}

function* vendorFormInitializeHandler(action) {
  const vendorEditForm = yield select(vendorFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = vendorEditForm.setValue(value).setInitialValue(value).ready();
    yield put(vendorFormActions.value.set(form));
    yield put(vendorDeletionActions.value.set(form));
  }
}

function* affiliatedFormInitializeHandler(action) {
  const affiliatedEditForm = yield select(affiliatedFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = affiliatedEditForm.setValue(value).setInitialValue(value).ready();
    yield put(affiliatedFormActions.value.set(form));
    yield put(affiliatedDeletionActions.value.set(form));
  }
}

function* companyWriteCompletedSaga(action) {
  yield call(history.push, `${COMPANIES_LIST_PATH}/detail/${action.payload.id}` as any);
  yield put(forceTableUpdate('companies', true));
}

function* contactWriteCompletedSaga() {
  yield put(forceTableUpdate('company-contacts', true));
}

function* customerWriteCompletedSaga(action) {
  yield put(forceTableUpdate('company-customers', true));
  yield call(history.push, `${COMPANIES_LIST_PATH}/detail/${action.payload.company_id}` as any);
}

function* vendorWriteCompletedSaga(action) {
  yield put(forceTableUpdate('company-vendors', true));
  yield call(history.push, `${COMPANIES_LIST_PATH}/detail/${action.payload.company_id}` as any);
}

function* affiliatedWriteCompletedSaga(action) {
  yield put(forceTableUpdate('company-affiliatedCompanies', true));
  yield call(history.push, `${COMPANIES_LIST_PATH}/detail/${action.payload.parent_company_id}` as any);
}

function* customerDeleteCompletedHandler() {
  const customerForm = yield select(customerFormSelector.getEntity);
  yield put(forceTableUpdate('company-customers'));
  yield call(history.push, `${COMPANIES_LIST_PATH}/detail/${customerForm.getValue().company_id}` as any);
}

function* vendorDeleteCompletedHandler() {
  const vendorForm = yield select(vendorFormSelector.getEntity);
  yield put(forceTableUpdate('company-vendors'));
  yield call(history.push, `${COMPANIES_LIST_PATH}/detail/${vendorForm.getValue().company_id}` as any);
}

function* affiliatedDeleteCompletedHandler() {
  const affiliatedForm = yield select(affiliatedFormSelector.getEntity);
  yield put(forceTableUpdate('company-affiliatedCompanies'));
  yield call(history.push, `${COMPANIES_LIST_PATH}/detail/${affiliatedForm.getValue().parent_company_id}` as any);
}

function* customerDeletionSaga() {
  yield spawn(createDeleteSaga(customerDeletionActionTypes, customerDeletionActions, customerDeletionApi));
  yield takeLatest(customerDeletionActionTypes.delete.completed, customerDeleteCompletedHandler);
}

function* vendorDeletionSaga() {
  yield spawn(createDeleteSaga(vendorDeletionActionTypes, vendorDeletionActions, vendorDeletionApi));
  yield takeLatest(vendorDeletionActionTypes.delete.completed, vendorDeleteCompletedHandler);
}

function* affiliatedDeletionSaga() {
  yield spawn(createDeleteSaga(affiliatedDeletionActionTypes, affiliatedDeletionActions, affiliatedDeletionApi));
  yield takeLatest(affiliatedDeletionActionTypes.delete.completed, affiliatedDeleteCompletedHandler);
}

export function* editCompanyFormSaga() {
  yield takeEvery(companyEditActionTypes.write.completed, companyWriteCompletedSaga);
  yield takeEvery(contactFormActionTypes.write.completed, contactWriteCompletedSaga);
  yield takeEvery(customerFormActionTypes.write.completed, customerWriteCompletedSaga);
  yield takeEvery(vendorFormActionTypes.write.completed, vendorWriteCompletedSaga);
  yield takeEvery(affiliatedFormActionTypes.write.completed, affiliatedWriteCompletedSaga);
  yield takeLatest(companyDetailsActionsTypes.read.completed, companyFormInitializeHandler);
  yield takeLatest(contactDetailsActionsTypes.read.completed, contactFormInitializeHandler);
  yield takeLatest(customerDetailsActionsTypes.read.completed, customerFormInitializeHandler);
  yield takeLatest(vendorDetailsActionsTypes.read.completed, vendorFormInitializeHandler);
  yield takeLatest(affiliatedDetailsActionsTypes.read.completed, affiliatedFormInitializeHandler);
  yield fork(createWriteSaga(companyEditActionTypes, companyEditActions, companyEditApi));
  yield fork(createWriteSaga(contactFormActionTypes, contactFormActions, contactEditApi));
  yield fork(createWriteSaga(customerFormActionTypes, customerFormActions, customerEditApi));
  yield fork(createWriteSaga(vendorFormActionTypes, vendorFormActions, vendorEditApi));
  yield fork(createWriteSaga(affiliatedFormActionTypes, affiliatedFormActions, affiliatedEditApi));
  yield spawn(customerDeletionSaga);
  yield spawn(vendorDeletionSaga);
  yield spawn(affiliatedDeletionSaga);
}

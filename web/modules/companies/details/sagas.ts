import { createReadSaga } from 'utils/api/read';
import { put, spawn, takeLatest } from 'redux-saga/effects';
import { forceTableUpdate } from 'modules/tables';
import {
  affiliatedDetailsActions,
  affiliatedDetailsActionsTypes,
  companyDetailsActions,
  companyDetailsActionsTypes,
  contactDetailsActions,
  contactDetailsActionsTypes,
  customerDetailsActions,
  customerDetailsActionsTypes,
  vendorDetailsActions,
  vendorDetailsActionsTypes
} from './actions';
import {
  affiliatedDetailsApi,
  companyDetailsApi,
  contactDetailsApi,
  customerDetailsApi,
  vendorDetailsApi
} from './api';

function* companyLoadedHandler() {
  yield put(forceTableUpdate('documents', true));
}

export function* companyDetailsSaga() {
  yield spawn(createReadSaga(companyDetailsActionsTypes, companyDetailsActions, companyDetailsApi));
  yield spawn(createReadSaga(contactDetailsActionsTypes, contactDetailsActions, contactDetailsApi));
  yield spawn(createReadSaga(customerDetailsActionsTypes, customerDetailsActions, customerDetailsApi));
  yield spawn(createReadSaga(vendorDetailsActionsTypes, vendorDetailsActions, vendorDetailsApi));
  yield spawn(createReadSaga(affiliatedDetailsActionsTypes, affiliatedDetailsActions, affiliatedDetailsApi));
  yield takeLatest(companyDetailsActionsTypes.read.completed, companyLoadedHandler);
}

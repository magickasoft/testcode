import { call, put, takeEvery } from 'redux-saga/effects';
import { createWriteSaga } from 'utils/api';
import { forceTableUpdate } from 'modules/tables';
import { history } from 'modules/router';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { companyInviteActionTypes, companyInviteActions } from './actions';
import { companyInviteApi } from './api';

function createCompanyInviteSaga(actionTypes, actions, api) {
  const writeSaga = createWriteSaga(actionTypes, actions, api);

  function* writeCompletedSaga() {
    yield put(forceTableUpdate('companies', true));
    yield call(history.push, COMPANIES_LIST_PATH as any);
  }

  return function* companyWriteSaga() {
    yield* writeSaga();
    yield takeEvery(actionTypes.write.completed, writeCompletedSaga);
  };
}

export const companyInviteSaga = createCompanyInviteSaga(
  companyInviteActionTypes,
  companyInviteActions,
  companyInviteApi
);

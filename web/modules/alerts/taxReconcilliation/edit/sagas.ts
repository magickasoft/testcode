import { fork, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { createWriteSaga } from 'utils/api';
import { history } from 'modules/router';
import { MAIN_PATH } from 'modules/main';
import { taxReconcilliationAnalyticsActionsTypes } from 'modules/alerts/taxReconcilliation/analytics';
import { taxReconcilliationEditActionTypes, taxReconcilliationEditActions } from './actions';
import { taxReconcilliationEditApi } from './api';
import { taxReconcilliationFormSelector } from './selectors';

function* formInitializeHandler(action) {
  const taxReconcilliationEditForm = yield select(taxReconcilliationFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = taxReconcilliationEditForm.setValue(value).setInitialValue(value).ready();
    yield put(taxReconcilliationEditActions.value.set(form));
  }
}

function* writeCompletedSaga(action) {
  yield call(history.push, `${MAIN_PATH}/taxReconcilliation/analytics/${action.payload.id}` as any);
}

export function* editTaxReconcilliationFormSaga() {
  yield takeEvery(taxReconcilliationEditActionTypes.write.completed, writeCompletedSaga);
  yield takeLatest(taxReconcilliationAnalyticsActionsTypes.read.completed, formInitializeHandler);
  yield fork(
    createWriteSaga(taxReconcilliationEditActionTypes, taxReconcilliationEditActions, taxReconcilliationEditApi)
  );
}

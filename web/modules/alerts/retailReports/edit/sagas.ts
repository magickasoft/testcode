import { fork, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { createWriteSaga } from 'utils/api';
import { history } from 'modules/router';
import { MAIN_PATH } from 'modules/main';
import { retailAnalyticsActionsTypes } from 'modules/alerts/retailReports/analytics';
import { retailEditActionTypes, retailEditActions } from './actions';
import { retailEditApi } from './api';
import { retailFormSelector } from './selectors';

function* formInitializeHandler(action) {
  const retailEditForm = yield select(retailFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = retailEditForm.setValue(value).setInitialValue(value).ready();
    yield put(retailEditActions.value.set(form));
  }
}

function* writeCompletedSaga(action) {
  yield call(history.push, `${MAIN_PATH}/wholesale/analytics/${action.payload.id}` as any);
}

export function* editRetailFormSaga() {
  yield takeEvery(retailEditActionTypes.write.completed, writeCompletedSaga);
  yield takeLatest(retailAnalyticsActionsTypes.read.completed, formInitializeHandler);
  yield fork(createWriteSaga(retailEditActionTypes, retailEditActions, retailEditApi));
}

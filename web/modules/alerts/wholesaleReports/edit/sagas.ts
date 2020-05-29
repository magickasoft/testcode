import { fork, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { createWriteSaga } from 'utils/api';
import { history } from 'modules/router';
import { MAIN_PATH } from 'modules/main';
import { wholesaleAnalyticsActionsTypes } from 'modules/alerts/wholesaleReports/analytics';
import { wholesaleEditActionTypes, wholesaleEditActions } from './actions';
import { wholesaleEditApi } from './api';
import { wholesaleFormSelector } from './selectors';

function* formInitializeHandler(action) {
  const wholesaleEditForm = yield select(wholesaleFormSelector.getEntity);

  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = wholesaleEditForm.setValue(value).setInitialValue(value).ready();
    yield put(wholesaleEditActions.value.set(form));
  }
}

function* writeCompletedSaga(action) {
  yield call(history.push, `${MAIN_PATH}/wholesale/analytics/${action.payload.id}` as any);
}

export function* editWholesaleFormSaga() {
  yield takeEvery(wholesaleEditActionTypes.write.completed, writeCompletedSaga);
  yield takeLatest(wholesaleAnalyticsActionsTypes.read.completed, formInitializeHandler);
  yield fork(createWriteSaga(wholesaleEditActionTypes, wholesaleEditActions, wholesaleEditApi));
}

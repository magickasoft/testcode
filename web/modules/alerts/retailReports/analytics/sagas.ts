import { createReadSaga } from 'utils/api/read';
import { spawn, takeLatest } from 'redux-saga/effects';
import { retailAnalyticsActionsTypes, retailAnalyticsActions } from './actions';
import { retailAnalyticsApi } from './api';

function* retailAnalyticsLoadedHandler() {}

export function* retailAnalyticsSaga() {
  yield spawn(createReadSaga(retailAnalyticsActionsTypes, retailAnalyticsActions, retailAnalyticsApi));
  yield takeLatest(retailAnalyticsActionsTypes.read.completed, retailAnalyticsLoadedHandler);
}

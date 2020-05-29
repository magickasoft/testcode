import { createReadSaga } from 'utils/api/read';
import { spawn, takeLatest } from 'redux-saga/effects';
import { wholesaleAnalyticsActionsTypes, wholesaleAnalyticsActions } from './actions';
import { wholesaleAnalyticsApi } from './api';

function* wholesaleAnalyticsLoadedHandler() {}

export function* wholesaleAnalyticsSaga() {
  yield spawn(createReadSaga(wholesaleAnalyticsActionsTypes, wholesaleAnalyticsActions, wholesaleAnalyticsApi));
  yield takeLatest(wholesaleAnalyticsActionsTypes.read.completed, wholesaleAnalyticsLoadedHandler);
}

import { createReadSaga } from 'utils/api/read';
import { spawn, takeLatest } from 'redux-saga/effects';
import { taxReconcilliationAnalyticsActionsTypes, taxReconcilliationAnalyticsActions } from './actions';
import { taxReconcilliationAnalyticsApi } from './api';

function* taxReconcilliationAnalyticsLoadedHandler() {}

export function* taxReconcilliationAnalyticsSaga() {
  yield spawn(
    createReadSaga(
      taxReconcilliationAnalyticsActionsTypes,
      taxReconcilliationAnalyticsActions,
      taxReconcilliationAnalyticsApi
    )
  );
  yield takeLatest(taxReconcilliationAnalyticsActionsTypes.read.completed, taxReconcilliationAnalyticsLoadedHandler);
}

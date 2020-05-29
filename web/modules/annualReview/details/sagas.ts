import { spawn } from 'redux-saga/effects';
import { createReadSaga } from 'utils/api/read';
import {
  annualReviewDetailsActionsTypes,
  annualReviewDetailsActions,
  annualReviewSalesDepositsActionsTypes,
  annualReviewDetailsSalesDepositsActions
} from './actions';
import { annualReviewDetailsApi, annualReviewDetailsSalesDepositsApi } from './api';

export function* annualReviewDetailsSaga() {
  yield spawn(createReadSaga(annualReviewDetailsActionsTypes, annualReviewDetailsActions, annualReviewDetailsApi));
  yield spawn(
    createReadSaga(
      annualReviewSalesDepositsActionsTypes,
      annualReviewDetailsSalesDepositsActions,
      annualReviewDetailsSalesDepositsApi
    )
  );
}

import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { ANNUAL_REVIEW_DETAILS_ID, ANNUAL_REVIEW_SALES_DEPOSITS_ID } from './constants';

export const annualReviewDetailsActionsTypes = createReadActionTypes(ANNUAL_REVIEW_DETAILS_ID);
export const annualReviewDetailsActions = createReadActions(annualReviewDetailsActionsTypes);

export const annualReviewSalesDepositsActionsTypes = createReadActionTypes(ANNUAL_REVIEW_SALES_DEPOSITS_ID);
export const annualReviewDetailsSalesDepositsActions = createReadActions(annualReviewSalesDepositsActionsTypes);

import { createReadReducer } from 'utils/api/read';
import { annualReviewDetailsActionsTypes, annualReviewSalesDepositsActionsTypes } from './actions';

export const annualReviewDetailsReducer = createReadReducer(annualReviewDetailsActionsTypes);
export const annualReviewSalesDepositsReducer = createReadReducer(annualReviewSalesDepositsActionsTypes);

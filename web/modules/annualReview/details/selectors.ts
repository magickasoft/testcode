import { createListSelectors } from 'utils/list';
import { createEntitySelectors } from 'utils/entity';
import { ANNUAL_REVIEW_DETAILS_ID, ANNUAL_REVIEW_SALES_DEPOSITS_ID } from './constants';

export const annualReviewDetailsSelector = createEntitySelectors(ANNUAL_REVIEW_DETAILS_ID);
export const annualReviewSalesDepositsSelector = createListSelectors(ANNUAL_REVIEW_SALES_DEPOSITS_ID);

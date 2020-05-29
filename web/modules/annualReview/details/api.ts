import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { ANNUAL_REVIEW_DETAILS_API_URL, ANNUAL_REVIEW_SALES_DEPOSITS_API_URL } from './constants';

export const annualReviewDetailsApi = createReadApi(api, {
  url: ANNUAL_REVIEW_DETAILS_API_URL
});
export const annualReviewDetailsSalesDepositsApi = createReadApi(api, {
  url: ANNUAL_REVIEW_SALES_DEPOSITS_API_URL
});

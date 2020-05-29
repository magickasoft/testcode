import { api } from 'modules/api';
import { createWriteApi } from 'utils/api/write/index';
import { createDeleteApi } from 'utils/api/delete/index';

const annualReviewWriteApiUrl = '/annual-review';
const annualReviewDeleteApiUrl = '/annual-review';

export const annualReviewWriteApi = createWriteApi(api, { url: annualReviewWriteApiUrl });

export const annualReviewDeleteApi = createDeleteApi(api, { url: annualReviewDeleteApiUrl });

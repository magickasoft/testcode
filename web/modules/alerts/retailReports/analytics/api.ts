import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { RETAIL_ANALYTICS_API_URL } from './constants';

export const retailAnalyticsApi = createReadApi(api, { url: RETAIL_ANALYTICS_API_URL });

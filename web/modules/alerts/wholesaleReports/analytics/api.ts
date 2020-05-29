import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { WHOLESALE_ANALYTICS_API_URL } from './constants';

export const wholesaleAnalyticsApi = createReadApi(api, { url: WHOLESALE_ANALYTICS_API_URL });

import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { TAX_RECONCILLIATION_ANALYTICS_API_URL } from './constants';

export const taxReconcilliationAnalyticsApi = createReadApi(api, { url: TAX_RECONCILLIATION_ANALYTICS_API_URL });

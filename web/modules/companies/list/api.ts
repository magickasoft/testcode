import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { COMPANIES_LIST_API_URL } from './constants';

export const companiesListApi = createReadApi(api, { url: COMPANIES_LIST_API_URL });

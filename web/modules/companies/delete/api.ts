import { api } from 'modules/api';
import { createDeleteApi } from 'utils/api/delete';
import { COMPANY_DELETION_API_URL } from './constants';

export const companyDeleteApi = createDeleteApi(api, { url: COMPANY_DELETION_API_URL });

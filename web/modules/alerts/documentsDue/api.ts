import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { DOCUMENTS_DUE_API_URL } from './constants';

export const documentsDueApi = createReadApi(api, { url: DOCUMENTS_DUE_API_URL });

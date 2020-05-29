import { api } from 'modules/api';
import { createDeleteApi } from 'utils/api/delete';

import { DOCUMENTS_FILE_API_URL, DOCUMENTS_PERIOD_API_URL, DOCUMENT_API_URL } from './constants';

export const documentsFileDeleteApi = createDeleteApi(api, { url: DOCUMENTS_FILE_API_URL });
export const documentPeriodDeleteApi = createDeleteApi(api, { url: DOCUMENTS_PERIOD_API_URL });
export const documentDeleteApi = createDeleteApi(api, { url: DOCUMENT_API_URL });

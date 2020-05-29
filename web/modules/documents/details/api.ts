import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { DOCUMENTS_DETAILS_API_URL, DOCUMENT_PERIODS_API_URL, DOCUMENT_FILES_API_URL } from './constants';

export const documentsDetailsApi = createReadApi(api, { url: DOCUMENTS_DETAILS_API_URL });
export const documentFileDetailsApi = createReadApi(api, { url: DOCUMENT_FILES_API_URL });
export const documentPeriodsApi = createReadApi(api, { url: DOCUMENT_PERIODS_API_URL });

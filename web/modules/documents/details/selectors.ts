import { createListSelectors } from 'utils/list';
import { DOCUMENTS_DETAILS_ID, DOCUMENT_PERIODS_ID, DOCUMENT_FILE_DETAILS_ID } from './constants';

export const documentsDetailsSelector = createListSelectors(DOCUMENTS_DETAILS_ID);
export const documentFileDetailsSelector = createListSelectors(DOCUMENT_FILE_DETAILS_ID);
export const documentPeriodsSelector = createListSelectors(DOCUMENT_PERIODS_ID);

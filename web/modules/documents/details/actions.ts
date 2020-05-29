import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { DOCUMENTS_DETAILS_ID, DOCUMENT_PERIODS_ID, DOCUMENT_FILE_DETAILS_ID } from './constants';

export const documentsDetailsActionsTypes = createReadActionTypes(DOCUMENTS_DETAILS_ID);
export const documentsDetailsActions = createReadActions(documentsDetailsActionsTypes);

export const documentFileDetailsActionsTypes = createReadActionTypes(DOCUMENT_FILE_DETAILS_ID);
export const documentFileDetailsActions = createReadActions(documentFileDetailsActionsTypes);

export const documentPeriodsActionsTypes = createReadActionTypes(DOCUMENT_PERIODS_ID);
export const documentPeriodsActions = createReadActions(documentPeriodsActionsTypes);

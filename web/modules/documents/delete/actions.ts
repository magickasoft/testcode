import { createDeleteActions, createDeleteActionTypes } from 'utils/api/delete';

import { DOCUMENTS_FILE_DELETE_ID, DOCUMENTS_PERIOD_DELETE_ID, DOCUMENT_DELETE_ID } from './constants';

export const documentsFileDeleteActionsTypes = createDeleteActionTypes(DOCUMENTS_FILE_DELETE_ID);
export const documentsFileDeleteActions = createDeleteActions(documentsFileDeleteActionsTypes);

export const documentPeriodDeleteActionsTypes = createDeleteActionTypes(DOCUMENTS_PERIOD_DELETE_ID);
export const documentPeriodDeleteActions = createDeleteActions(documentPeriodDeleteActionsTypes);

export const documentDeleteActionsTypes = createDeleteActionTypes(DOCUMENT_DELETE_ID);
export const documentDeleteActions = createDeleteActions(documentDeleteActionsTypes);

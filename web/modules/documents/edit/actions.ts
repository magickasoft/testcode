import { createWriteActions, createWriteActionTypes } from 'utils/api/write';
import { createUploadActionTypes, createUploadActions } from 'utils/api/upload';
import { documentPeriodFormId, documentPeriodUploadId, documentFileFormId, documentFormId } from './constants';

export const documentPeriodFormActionTypes = createWriteActionTypes(documentPeriodFormId);
export const documentPeriodFormActions = createWriteActions(documentPeriodFormActionTypes);

export const documentFileFormActionTypes = createWriteActionTypes(documentFileFormId);
export const documentFileFormActions = createWriteActions(documentFileFormActionTypes);

export const documentFormActionTypes = createWriteActionTypes(documentFormId);
export const documentFormActions = createWriteActions(documentFormActionTypes);

export const documentPeriodUploadActionTypes = createUploadActionTypes(documentPeriodUploadId);
export const documentPeriodUploadActions = createUploadActions(documentPeriodUploadActionTypes);

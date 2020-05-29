import { createWriteActions, createWriteActionTypes } from 'utils/api/write';
import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { internalTransfersExportFormId, internalTransfersExportDetailsId } from './constants';

export const internalTransfersExportFormActionTypes = createWriteActionTypes(internalTransfersExportFormId);
export const internalTransfersExportFormActions = createWriteActions(internalTransfersExportFormActionTypes);

export const internalTransfersExportDetailsActionTypes = createReadActionTypes(internalTransfersExportDetailsId);
export const internalTransfersExportDetailsActions = createReadActions(internalTransfersExportDetailsActionTypes);

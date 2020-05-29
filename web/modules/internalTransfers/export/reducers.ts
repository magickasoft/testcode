import { createReadReducer } from 'utils/api/read';
import { createWriteReducer } from 'utils/api/write';
import { InternalTranserExportFormModel } from './models';
import { internalTransfersExportDetailsActionTypes, internalTransfersExportFormActionTypes } from './actions';

export const internalTransferExportFormReducer = createWriteReducer(
  internalTransfersExportFormActionTypes,
  new InternalTranserExportFormModel()
);

export const internalTransferExportDetailsReducer = createReadReducer(internalTransfersExportDetailsActionTypes);

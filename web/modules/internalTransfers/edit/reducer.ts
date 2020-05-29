import { createWriteReducer } from 'utils/api/write/index';
import { createDeleteReducer } from 'utils/api/delete/index';
import { InternalTransferFormModel } from 'modules/internalTransfers/models/InternalTransferFormModel';
import { internalTransferWriteActionTypes, internalTransferDeleteActionTypes } from './constants';

export const internalTransferFormReducer = createWriteReducer(
  internalTransferWriteActionTypes,
  new InternalTransferFormModel()
);

export const internalTransferDeleteReducer = createDeleteReducer(
  internalTransferDeleteActionTypes,
  new InternalTransferFormModel()
);

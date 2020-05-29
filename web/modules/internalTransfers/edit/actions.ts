import { createWriteActions } from 'utils/api/write/index';
import { createDeleteActions } from 'utils/api/delete/index';
import { internalTransferWriteActionTypes, internalTransferDeleteActionTypes } from './constants';

export const internalTransferWriteActions = createWriteActions(internalTransferWriteActionTypes);
export const internalTransferDeleteActions = createDeleteActions(internalTransferDeleteActionTypes);

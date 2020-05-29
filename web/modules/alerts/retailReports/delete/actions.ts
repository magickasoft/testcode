import { createDeleteActions, createDeleteActionTypes } from 'utils/api/delete';

import { RETAIL_DELETION_ID } from './constants';

export const retailDeleteActionsTypes = createDeleteActionTypes(RETAIL_DELETION_ID);
export const retailDeleteActions = createDeleteActions(retailDeleteActionsTypes);

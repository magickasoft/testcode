import { createDeleteActions, createDeleteActionTypes } from 'utils/api/delete';

import { WHOLESALE_DELETION_ID } from './constants';

export const wholesaleDeleteActionsTypes = createDeleteActionTypes(WHOLESALE_DELETION_ID);
export const wholesaleDeleteActions = createDeleteActions(wholesaleDeleteActionsTypes);

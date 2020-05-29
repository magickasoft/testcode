import { createDeleteActions, createDeleteActionTypes } from 'utils/api/delete';

import { TAX_RECONCILLIATION_DELETION_ID } from './constants';

export const taxReconcilliationDeleteActionsTypes = createDeleteActionTypes(TAX_RECONCILLIATION_DELETION_ID);
export const taxReconcilliationDeleteActions = createDeleteActions(taxReconcilliationDeleteActionsTypes);

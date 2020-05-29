import { createDeleteActions, createDeleteActionTypes } from 'utils/api/delete';

import { INVOICE_SUBMITTAL_DELETION_ID } from './constants';

export const invoiceSubmittalDeleteActionsTypes = createDeleteActionTypes(INVOICE_SUBMITTAL_DELETION_ID);
export const invoiceSubmittalDeleteActions = createDeleteActions(invoiceSubmittalDeleteActionsTypes);

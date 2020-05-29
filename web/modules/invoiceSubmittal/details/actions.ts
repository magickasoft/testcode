import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { INVOICE_SUBMITTAL_DETAILS_ID } from './constants';

export const invoiceSubmittalDetailsActionsTypes = createReadActionTypes(INVOICE_SUBMITTAL_DETAILS_ID);
export const invoiceSubmittalDetailsActions = createReadActions(invoiceSubmittalDetailsActionsTypes);

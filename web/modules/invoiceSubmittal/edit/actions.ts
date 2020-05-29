import { createWriteActions, createWriteActionTypes } from 'utils/api';
import { INVOICE_SUBMITTAL_EDIT_ID } from './constants';

export const invoiceSubmittalEditActionTypes = createWriteActionTypes(INVOICE_SUBMITTAL_EDIT_ID);
export const invoiceSubmittalEditActions = createWriteActions(invoiceSubmittalEditActionTypes);

import { createReadReducer } from 'utils/api/read';
import { invoiceSubmittalDetailsActionsTypes } from './actions';

export const invoiceSubmittalDetailsReducer = createReadReducer(invoiceSubmittalDetailsActionsTypes);

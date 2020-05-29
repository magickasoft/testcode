import { createWriteReducer } from 'utils/api';
import { invoiceSubmittalEditActionTypes } from './actions';
import { InvoiceSubmittalFormModel } from './models';

export const invoiceSubmittalEditReducer = createWriteReducer(
  invoiceSubmittalEditActionTypes,
  new InvoiceSubmittalFormModel()
);

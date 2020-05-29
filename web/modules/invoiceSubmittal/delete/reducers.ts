import { createDeleteReducer } from 'utils/api/delete';
import { invoiceSubmittalDeleteActionsTypes } from './actions';
import { InvoiceSubmittalDeleteModel } from './models';

export const invoiceSubmittalDeleteReducer = createDeleteReducer(
  invoiceSubmittalDeleteActionsTypes,
  new InvoiceSubmittalDeleteModel()
);

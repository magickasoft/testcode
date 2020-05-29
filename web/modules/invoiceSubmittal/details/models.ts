import { FormFieldModel, FormModel } from 'utils/form';

const invoiceSubmittalDetailsFields = {
  id: new FormFieldModel(0)
};

export const InvoiceSubmittalDetailsModel = FormModel.Factory(invoiceSubmittalDetailsFields, false);

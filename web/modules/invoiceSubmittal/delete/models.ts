import { FormFieldModel, FormModel } from 'utils/form';

const invoiceSubmittalDeleteModelFields = {
  id: new FormFieldModel(0)
};

export const InvoiceSubmittalDeleteModel = FormModel.Factory(invoiceSubmittalDeleteModelFields, false);

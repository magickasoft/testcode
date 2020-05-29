import moment from 'moment';
import { FormFieldModel, FormModel } from 'utils/form';

const invoiceSubmittalFormFields = {
  amount: new FormFieldModel(0),
  created_at: new FormFieldModel(null),
  date: new FormFieldModel(moment()),
  deleted_at: new FormFieldModel(null),
  file_keys: new FormFieldModel([]),
  id: new FormFieldModel(0),
  license_id: new FormFieldModel(0),
  manifest_number: new FormFieldModel(''),
  notes: new FormFieldModel(''),
  sf_external_id: new FormFieldModel(''),
  updated_at: new FormFieldModel(null)
};

export const InvoiceSubmittalFormModel = FormModel.Factory(invoiceSubmittalFormFields);

import moment from 'moment';
import { FormFieldModel, FormModel } from 'utils/form/index';

export const internalTransferFormFields = {
  id: new FormFieldModel(0),
  status: new FormFieldModel('new'),
  recipient_license_id: new FormFieldModel(''),
  sender_license_id: new FormFieldModel(''),
  manifest_number: new FormFieldModel(''),
  amount: new FormFieldModel(''),
  notes: new FormFieldModel(''),
  date: new FormFieldModel(moment()),
  created_at: new FormFieldModel(null),
  updated_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null),
  approval_date: new FormFieldModel(null),
  export_id: new FormFieldModel(null),
  approvals_count: new FormFieldModel(null),
  required_approvals_count: new FormFieldModel(null),
  history: new FormFieldModel(null),
  sf_external_id: new FormFieldModel(null)
};

const InternalTransferFormModel = FormModel.Factory(internalTransferFormFields);

export { InternalTransferFormModel };

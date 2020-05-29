import { FormFieldModel, FormModel } from 'utils/form';
import moment from 'moment';

export const documentPeriodFormFields = {
  id: new FormFieldModel(0),
  document_id: new FormFieldModel(''),
  start_date: new FormFieldModel(moment()),
  end_date: new FormFieldModel(moment()),
  status: new FormFieldModel('new'),
  next_created: new FormFieldModel(false),
  notes: new FormFieldModel(''),
  delivered_at: new FormFieldModel(null),
  is_legacy: new FormFieldModel(false),
  created_at: new FormFieldModel(null),
  updated_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null),
  return_path: new FormFieldModel(null)
};

export const DocumentPeriodFormModel = FormModel.Factory(documentPeriodFormFields);

export const documentFileFormFields = {
  id: new FormFieldModel(''),
  document_period_id: new FormFieldModel(''),
  name: new FormFieldModel(''),
  s3_key: new FormFieldModel(''),
  status: new FormFieldModel(''),
  notes: new FormFieldModel(''),
  created_at: new FormFieldModel(''),
  updated_at: new FormFieldModel(''),
  deleted_at: new FormFieldModel('')
};

export const DocumentFileFormModel = FormModel.Factory(documentFileFormFields);

export const documentFormFields = {
  id: new FormFieldModel(0),
  document_template_id: new FormFieldModel(null),
  company_id: new FormFieldModel(null),
  name: new FormFieldModel(''),
  license_id: new FormFieldModel(null),
  internal: new FormFieldModel(false),
  frequency: new FormFieldModel('annual'),
  start_date_type: new FormFieldModel(''),
  status: new FormFieldModel('new'),
  notes: new FormFieldModel(''),
  expiration_delay_days: new FormFieldModel('0'),
  initialized: new FormFieldModel(false),
  created_at: new FormFieldModel(null),
  updated_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null)
};

export const DocumentFormModel = FormModel.Factory(documentFormFields);

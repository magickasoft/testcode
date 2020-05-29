import { FormFieldModel, FormModel } from 'utils/form';

export const documentsFilterFields = {
  company_id: new FormFieldModel(''),
  due_status: new FormFieldModel(''),
  license_id: new FormFieldModel(''),
  expiration_delay_days: new FormFieldModel(''),
  internal: new FormFieldModel(''),
  frequency: new FormFieldModel(''),
  _options: new FormFieldModel({ filters: [] })
};

export const DocumentsFilterModel = FormModel.Factory(documentsFilterFields);

import { FormFieldModel, FormModel } from 'utils/form';

export const documentsDueFilterFields = {
  company_id: new FormFieldModel(''),
  internal: new FormFieldModel(''),
  license_id: new FormFieldModel(''),
  frequency: new FormFieldModel('')
};

export const DocumentsDueFilterModel = FormModel.Factory(documentsDueFilterFields);

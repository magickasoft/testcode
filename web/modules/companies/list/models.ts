import { FormFieldModel, FormModel } from 'utils/form';

export const CompaniesFilterModel = FormModel.Factory({
  active: new FormFieldModel(''),
  customer_status: new FormFieldModel(''),
  entity_type: new FormFieldModel(''),
  business_type: new FormFieldModel('')
});

import { FormFieldModel, FormModel } from 'utils/form';

export const retailReportsFilterFields = {
  status: new FormFieldModel(''),
  company_id: new FormFieldModel(''),
  license_id: new FormFieldModel('')
};

export const RetailReportsFilterModel = FormModel.Factory(retailReportsFilterFields);

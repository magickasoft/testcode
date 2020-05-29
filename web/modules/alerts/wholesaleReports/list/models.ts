import { FormFieldModel, FormModel } from 'utils/form';

export const wholesaleReportsFilterFields = {
  status: new FormFieldModel(''),
  company_id: new FormFieldModel(''),
  license_id: new FormFieldModel('')
};

export const WholesaleReportsFilterModel = FormModel.Factory(wholesaleReportsFilterFields);

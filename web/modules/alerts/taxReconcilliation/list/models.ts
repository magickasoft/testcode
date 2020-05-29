import { FormFieldModel, FormModel } from 'utils/form';

export const taxReconcilliationFilterFields = {
  status: new FormFieldModel(''),
  company_id: new FormFieldModel(''),
  license_id: new FormFieldModel('')
};

export const TaxReconcilliationFilterModel = FormModel.Factory(taxReconcilliationFilterFields);

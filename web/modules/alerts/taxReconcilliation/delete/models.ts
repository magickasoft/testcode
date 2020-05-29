import { FormFieldModel, FormModel } from 'utils/form';

const taxReconcilliationDeleteModelFields = {
  id: new FormFieldModel(0)
};

export const TaxReconcilliationDeleteModel = FormModel.Factory(taxReconcilliationDeleteModelFields, false);

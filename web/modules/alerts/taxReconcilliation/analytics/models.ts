import { FormFieldModel, FormModel } from 'utils/form';

const taxReconcilliationAnalyticsFields = {
  id: new FormFieldModel(0)
};

export const TaxReconcilliationAnalyticsModel = FormModel.Factory(taxReconcilliationAnalyticsFields, false);

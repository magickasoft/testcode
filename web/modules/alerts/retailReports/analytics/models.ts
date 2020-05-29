import { FormFieldModel, FormModel } from 'utils/form';

const retailAnalyticsFields = {
  id: new FormFieldModel(null)
};

export const RetailAnalyticsModel = FormModel.Factory(retailAnalyticsFields);

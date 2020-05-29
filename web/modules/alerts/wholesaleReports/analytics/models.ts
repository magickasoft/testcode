import { FormFieldModel, FormModel } from 'utils/form';

const wholesaleAnalyticsFields = {
  id: new FormFieldModel(0)
};

export const WholesaleAnalyticsModel = FormModel.Factory(wholesaleAnalyticsFields, false);

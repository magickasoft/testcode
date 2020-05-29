import { FormFieldModel, FormModel } from 'utils/form';

const retailDeleteModelFields = {
  id: new FormFieldModel(0)
};

export const RetailDeleteModel = FormModel.Factory(retailDeleteModelFields, false);

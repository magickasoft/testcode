import { FormFieldModel, FormModel } from 'utils/form';

const wholesaleDeleteModelFields = {
  id: new FormFieldModel(0)
};

export const WholesaleDeleteModel = FormModel.Factory(wholesaleDeleteModelFields, false);

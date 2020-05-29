import { FormFieldModel, FormModel } from 'utils/form';

export const DocumentsDueFilterModel = FormModel.Factory({
  almost_due: new FormFieldModel(true)
});

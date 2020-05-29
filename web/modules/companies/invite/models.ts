import { FormFieldModel, FormModel } from 'utils/form';

export const CompanyInviteModel = FormModel.Factory({
  email: new FormFieldModel(null),
  externalId: new FormFieldModel(null),
  firstName: new FormFieldModel(null),
  lastName: new FormFieldModel(null)
});

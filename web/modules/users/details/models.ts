import { FormFieldModel, FormModel } from 'utils/form';

const UserDetailsFilterModelFields = {
  id: new FormFieldModel(0)
};

export const UserDetailsFilterModel = FormModel.Factory(UserDetailsFilterModelFields);

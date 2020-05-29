import { FormFieldModel, FormModel } from 'utils/form';

const UserFormFields = {
  id: new FormFieldModel(''),
  organization_id: new FormFieldModel(null),
  sf_id: new FormFieldModel(null),
  email: new FormFieldModel(''),
  first_name: new FormFieldModel(''),
  last_name: new FormFieldModel(''),
  permissions: new FormFieldModel([]),
  last_login: new FormFieldModel(null),
  mfa_required: new FormFieldModel(true),
  profile: new FormFieldModel(''),
  time_zone: new FormFieldModel(''),
  language: new FormFieldModel(''),
  phone: new FormFieldModel(''),
  active: new FormFieldModel(false),
  created_at: new FormFieldModel(null),
  updated_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null)
};

export const UserFormModel = FormModel.Factory(UserFormFields);

const ResetUserAccessFormFields = {
  login: new FormFieldModel(''),
  url: new FormFieldModel('')
};

export const ResetUserAccessFormModel = FormModel.Factory(ResetUserAccessFormFields);

import { FormFieldModel, FormModel } from 'utils/form';

const licenseDetailsFilterModelFields = {
  id: new FormFieldModel(0)
};

export const LicenseDetailsFilterModel = FormModel.Factory(licenseDetailsFilterModelFields, false);

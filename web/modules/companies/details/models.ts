import { FormFieldModel, FormModel } from 'utils/form';

const companyDetailsFields = {
  id: new FormFieldModel(null)
};

export const CompanyDetailsModel = FormModel.Factory(companyDetailsFields);

export const ContactDetailsFilterModel = FormModel.Factory({
  id: new FormFieldModel(null)
});

export const CustomerDetailsFilterModel = FormModel.Factory({
  id: new FormFieldModel(null)
});

export const VendorDetailsFilterModel = FormModel.Factory({
  id: new FormFieldModel(null)
});

export const AffiliatedDetailsFilterModel = FormModel.Factory({
  id: new FormFieldModel(null)
});

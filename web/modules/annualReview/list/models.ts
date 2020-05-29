import { FormFieldModel, FormModel } from 'utils/form';

export const annualReviewFilterFields = {
  status: new FormFieldModel(''),
  company_id: new FormFieldModel('')
};

export const AnnualReviewFilterModel = FormModel.Factory(annualReviewFilterFields);

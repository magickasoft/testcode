import { FormFieldModel, FormModel } from 'utils/form';

const annualReviewDetailsFilterModelFields = {
  id: new FormFieldModel(0),
  company_id: new FormFieldModel(0)
  // _options: {
  //   filters: [
  //     {
  //       field: 'id',
  //       type: 'eq',
  //       value: id,
  //     },
  //     {
  //       field: 'company_id',
  //       type: 'eq',
  //       value: companyId,
  //     },
  //   ],
  // },
};

const annualReviewDetailsSalesDepositsFilterModelFields = {
  annual_review_id: new FormFieldModel(0)
};

export const AnnualReviewDetailsFilterModel = FormModel.Factory(annualReviewDetailsFilterModelFields, false);
export const AnnualReviewDetailsSalesDepositsFilterModel = FormModel.Factory(
  annualReviewDetailsSalesDepositsFilterModelFields,
  false
);

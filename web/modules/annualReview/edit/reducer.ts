import { createWriteReducer } from 'utils/api/write';
import { createDeleteReducer } from 'utils/api/delete';
import { AnnualReviewFormModel } from './models';
import { annualReviewWriteActionTypes, annualReviewDeleteActionTypes } from './constants';

export const annualReviewFormReducer = createWriteReducer(annualReviewWriteActionTypes, new AnnualReviewFormModel());

export const annualReviewDeleteReducer = createDeleteReducer(
  annualReviewDeleteActionTypes,
  new AnnualReviewFormModel()
);

import { createWriteActionTypes } from 'utils/api/write';
import { createDeleteActionTypes } from 'utils/api/delete';

export const annualReviewFormId = 'annualReview.edit';
export const annualReviewDeletionId = 'annualReview.deletion';

export const annualReviewWriteActionTypes = createWriteActionTypes(annualReviewFormId);
export const annualReviewDeleteActionTypes = createDeleteActionTypes(annualReviewDeletionId);

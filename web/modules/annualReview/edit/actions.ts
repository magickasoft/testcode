import { createWriteActions } from 'utils/api/write/index';
import { createDeleteActions } from 'utils/api/delete/index';
import { annualReviewWriteActionTypes, annualReviewDeleteActionTypes } from './constants';

export const annualReviewWriteActions = createWriteActions(annualReviewWriteActionTypes);
export const annualReviewDeleteActions = createDeleteActions(annualReviewDeleteActionTypes);

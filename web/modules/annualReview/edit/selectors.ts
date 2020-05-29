import { createEntitySelectors } from 'utils/entity';
import { annualReviewFormId, annualReviewDeletionId } from './constants';

export const annualReviewFormSelector = createEntitySelectors(annualReviewFormId);

export const annualReviewDeletionSelector = createEntitySelectors(annualReviewDeletionId);

import { createEntitySelectors } from 'utils/entity';
import { COMPANY_DELETION_ID } from './constants';

export const companyDeletionSelector = createEntitySelectors(COMPANY_DELETION_ID);

import { createEntitySelectors } from 'utils/entity';
import { DOCUMENT_DELETE_ID } from './constants';

export const documentDeletionSelector = createEntitySelectors(DOCUMENT_DELETE_ID);

import { createEntitySelectors } from 'utils/entity';
import { DOCUMENTS_DUE_KEY } from './constants';

export const documentsDueSelector = createEntitySelectors(DOCUMENTS_DUE_KEY);

import { createEntitySelectors } from 'utils/entity';
import { documentFileFormId, documentPeriodFormId, documentFormId } from './constants';

export const documentPeriodFormSelector = createEntitySelectors(documentPeriodFormId);

export const documentFileFormSelector = createEntitySelectors(documentFileFormId);

export const documentFormSelector = createEntitySelectors(documentFormId);

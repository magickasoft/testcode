import { createEntitySelectors } from 'utils/entity/index';
import { internalTransferFormId, internalTransferDeletionId } from './constants';

export const internalTransferFormSelector = createEntitySelectors(internalTransferFormId);

export const internalTransferDeletionSelector = createEntitySelectors(internalTransferDeletionId);

import { createEntitySelectors } from 'utils/entity';
import { INTERNAL_TRANSFER_STORE_KEY } from './reducers';

export const internalTransferSelectors = createEntitySelectors(INTERNAL_TRANSFER_STORE_KEY);

export const internalTransferSelector = (state) => {
  const entity = internalTransferSelectors.getEntity(state);
  const value = entity?.getValue() || {};

  return {
    isPending: entity?.isPending() || false,
    details: Array.isArray(value) && value.length === 1 ? value[0] : {}
  };
};

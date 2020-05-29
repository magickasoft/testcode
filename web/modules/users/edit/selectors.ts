import { createEntitySelectors } from 'utils/entity';
import { userFormId, userResetAccessFormId } from './constants';

export const userFormSelector = createEntitySelectors(userFormId);

export const userResetAccessFormSelector = createEntitySelectors(userResetAccessFormId);

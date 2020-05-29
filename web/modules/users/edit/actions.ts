import { createWriteActions, createWriteActionTypes } from 'utils/api/write';
import { userFormId, userResetAccessFormId } from './constants';

export const userFormActionTypes = createWriteActionTypes(userFormId);
export const userFormActions = createWriteActions(userFormActionTypes);

export const userResetAccessFormActionTypes = createWriteActionTypes(userResetAccessFormId);
export const userResetAccessFormActions = createWriteActions(userResetAccessFormActionTypes);

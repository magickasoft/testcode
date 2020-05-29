import { createWriteActions, createWriteActionTypes } from 'utils/api';
import { WHOLESALE_EDIT_ID } from './constants';

export const wholesaleEditActionTypes = createWriteActionTypes(WHOLESALE_EDIT_ID);
export const wholesaleEditActions = createWriteActions(wholesaleEditActionTypes);

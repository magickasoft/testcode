import { createWriteActions, createWriteActionTypes } from 'utils/api';
import { RETAIL_EDIT_ID } from './constants';

export const retailEditActionTypes = createWriteActionTypes(RETAIL_EDIT_ID);
export const retailEditActions = createWriteActions(retailEditActionTypes);

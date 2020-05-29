import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { DOCUMENTS_DUE_KEY } from './constants';

export const documentsDueActionTypes = createReadActionTypes(DOCUMENTS_DUE_KEY);
export const documentsDueActions = createReadActions(documentsDueActionTypes);

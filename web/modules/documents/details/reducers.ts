import { createReadReducer } from 'utils/api/read';
import { documentsDetailsActionsTypes, documentPeriodsActionsTypes, documentFileDetailsActionsTypes } from './actions';

export const documentsDetailsReducer = createReadReducer(documentsDetailsActionsTypes);
export const documentFileDetailsReducer = createReadReducer(documentFileDetailsActionsTypes);
export const documentPeriodsReducer = createReadReducer(documentPeriodsActionsTypes);

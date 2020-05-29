import { createReadReducer } from 'utils/api/read';
import { documentsDueActionTypes } from './actions';

export const documentsDueReducer = createReadReducer(documentsDueActionTypes);

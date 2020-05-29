import { createReadReducer } from 'utils/api/read';
import { userDetailsActionsTypes } from './actions';

export const userDetailsReducer = createReadReducer(userDetailsActionsTypes);

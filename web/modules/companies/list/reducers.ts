import { createReadReducer } from 'utils/api/read';
import { companiesListActionsTypes } from './actions';

export const companiesListReducer = createReadReducer(companiesListActionsTypes);

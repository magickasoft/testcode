import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { COMPANIES_LIST_ID } from './constants';

export const companiesListActionsTypes = createReadActionTypes(COMPANIES_LIST_ID);
export const companiesListActions = createReadActions(companiesListActionsTypes);

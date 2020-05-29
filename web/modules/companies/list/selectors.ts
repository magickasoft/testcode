import { createListSelectors } from 'utils/list';
import { COMPANIES_LIST_ID } from './constants';

export const companiesListSelectors = createListSelectors(COMPANIES_LIST_ID);

import { createListSelectors } from 'utils/list';
import { USER_DETAILS_ID } from './constants';

export const userDetailsSelector = createListSelectors(USER_DETAILS_ID);

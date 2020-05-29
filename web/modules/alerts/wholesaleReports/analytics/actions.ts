import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { WHOLESALE_ANALYTICS_ID } from './constants';

export const wholesaleAnalyticsActionsTypes = createReadActionTypes(WHOLESALE_ANALYTICS_ID);
export const wholesaleAnalyticsActions = createReadActions(wholesaleAnalyticsActionsTypes);

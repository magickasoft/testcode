import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { RETAIL_ANALYTICS_ID } from './constants';

export const retailAnalyticsActionsTypes = createReadActionTypes(RETAIL_ANALYTICS_ID);
export const retailAnalyticsActions = createReadActions(retailAnalyticsActionsTypes);

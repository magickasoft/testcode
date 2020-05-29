import { createReadReducer } from 'utils/api/read';
import { retailAnalyticsActionsTypes } from './actions';

export const retailAnalyticsReducer = createReadReducer(retailAnalyticsActionsTypes);

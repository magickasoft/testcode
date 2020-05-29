import { createReadReducer } from 'utils/api/read';
import { wholesaleAnalyticsActionsTypes } from './actions';

export const wholesaleAnalyticsReducer = createReadReducer(wholesaleAnalyticsActionsTypes);

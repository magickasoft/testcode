import { createReadReducer } from 'utils/api/read';
import { taxReconcilliationAnalyticsActionsTypes } from './actions';

export const taxReconcilliationAnalyticsReducer = createReadReducer(taxReconcilliationAnalyticsActionsTypes);

import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { TAX_RECONCILLIATION_ANALYTICS_ID } from './constants';

export const taxReconcilliationAnalyticsActionsTypes = createReadActionTypes(TAX_RECONCILLIATION_ANALYTICS_ID);
export const taxReconcilliationAnalyticsActions = createReadActions(taxReconcilliationAnalyticsActionsTypes);

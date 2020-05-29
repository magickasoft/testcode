import { createWriteActions, createWriteActionTypes } from 'utils/api';
import { TAX_RECONCILLIATION_EDIT_ID } from './constants';

export const taxReconcilliationEditActionTypes = createWriteActionTypes(TAX_RECONCILLIATION_EDIT_ID);
export const taxReconcilliationEditActions = createWriteActions(taxReconcilliationEditActionTypes);

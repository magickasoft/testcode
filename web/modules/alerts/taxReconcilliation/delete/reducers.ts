import { createDeleteReducer } from 'utils/api/delete';
import { taxReconcilliationDeleteActionsTypes } from './actions';
import { TaxReconcilliationDeleteModel } from './models';

export const taxReconcilliationDeleteReducer = createDeleteReducer(
  taxReconcilliationDeleteActionsTypes,
  new TaxReconcilliationDeleteModel()
);

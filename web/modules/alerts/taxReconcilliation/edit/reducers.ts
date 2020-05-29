import { createWriteReducer } from 'utils/api';
import { taxReconcilliationEditActionTypes } from './actions';
import { TaxReconcilliationFormModel } from './models';

export const taxReconcilliationEditReducer = createWriteReducer(
  taxReconcilliationEditActionTypes,
  new TaxReconcilliationFormModel()
);

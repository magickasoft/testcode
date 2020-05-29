import { createDeleteReducer } from 'utils/api/delete';
import { companyDeleteActionsTypes } from './actions';
import { CompanyDeleteFilterModel } from './models';

export const companyDeletionReducer = createDeleteReducer(companyDeleteActionsTypes, new CompanyDeleteFilterModel());

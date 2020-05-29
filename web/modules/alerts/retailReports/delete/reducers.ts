import { createDeleteReducer } from 'utils/api/delete';
import { retailDeleteActionsTypes } from './actions';
import { RetailDeleteModel } from './models';

export const retailDeleteReducer = createDeleteReducer(retailDeleteActionsTypes, new RetailDeleteModel());

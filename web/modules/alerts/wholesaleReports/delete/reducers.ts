import { createDeleteReducer } from 'utils/api/delete';
import { wholesaleDeleteActionsTypes } from './actions';
import { WholesaleDeleteModel } from './models';

export const wholesaleDeleteReducer = createDeleteReducer(wholesaleDeleteActionsTypes, new WholesaleDeleteModel());

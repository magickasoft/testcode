import { createWriteReducer } from 'utils/api';
import { retailEditActionTypes } from './actions';
import { RetailFormModel } from './models';

export const retailEditReducer = createWriteReducer(retailEditActionTypes, new RetailFormModel());

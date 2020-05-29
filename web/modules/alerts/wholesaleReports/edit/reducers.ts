import { createWriteReducer } from 'utils/api';
import { wholesaleEditActionTypes } from './actions';
import { WholesaleFormModel } from './models';

export const wholesaleEditReducer = createWriteReducer(wholesaleEditActionTypes, new WholesaleFormModel());

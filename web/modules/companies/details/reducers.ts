import { createReadReducer } from 'utils/api/read';
import {
  companyDetailsActionsTypes,
  contactDetailsActionsTypes,
  customerDetailsActionsTypes,
  vendorDetailsActionsTypes,
  affiliatedDetailsActionsTypes
} from './actions';

export const companyDetailsReducer = createReadReducer(companyDetailsActionsTypes);
export const contactDetailsReducer = createReadReducer(contactDetailsActionsTypes);
export const customerDetailsReducer = createReadReducer(customerDetailsActionsTypes);
export const vendorDetailsReducer = createReadReducer(vendorDetailsActionsTypes);
export const affiliatedDetailsReducer = createReadReducer(affiliatedDetailsActionsTypes);

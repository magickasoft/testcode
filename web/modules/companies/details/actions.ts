import { createReadActions, createReadActionTypes } from 'utils/api/read';
import {
  CONTACT_DETAILS_ID,
  CUSTOMER_DETAILS_ID,
  COMPANY_DETAILS_ID,
  VENDOR_DETAILS_ID,
  AFFILIATED_DETAILS_ID
} from './constants';

export const companyDetailsActionsTypes = createReadActionTypes(COMPANY_DETAILS_ID);
export const companyDetailsActions = createReadActions(companyDetailsActionsTypes);

export const contactDetailsActionsTypes = createReadActionTypes(CONTACT_DETAILS_ID);
export const contactDetailsActions = createReadActions(contactDetailsActionsTypes);

export const customerDetailsActionsTypes = createReadActionTypes(CUSTOMER_DETAILS_ID);
export const customerDetailsActions = createReadActions(customerDetailsActionsTypes);

export const vendorDetailsActionsTypes = createReadActionTypes(VENDOR_DETAILS_ID);
export const vendorDetailsActions = createReadActions(vendorDetailsActionsTypes);

export const affiliatedDetailsActionsTypes = createReadActionTypes(AFFILIATED_DETAILS_ID);
export const affiliatedDetailsActions = createReadActions(affiliatedDetailsActionsTypes);

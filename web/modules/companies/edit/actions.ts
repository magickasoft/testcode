import { createWriteActions, createWriteActionTypes } from 'utils/api';
import { createDeleteActions, createDeleteActionTypes } from 'utils/api/delete/index';
import {
  COMPANY_EDIT_ID,
  CONTACT_EDIT_ID,
  CUSTOMER_DELETION_ID,
  CUSTOMER_EDIT_ID,
  VENDOR_EDIT_ID,
  VENDOR_DELETION_ID,
  AFFILIATED_EDIT_ID,
  AFFILIATED_DELETION_ID
} from './constants';

export const companyEditActionTypes = createWriteActionTypes(COMPANY_EDIT_ID);
export const companyEditActions = createWriteActions(companyEditActionTypes);

export const contactFormActionTypes = createWriteActionTypes(CONTACT_EDIT_ID);
export const contactFormActions = createWriteActions(contactFormActionTypes);

export const customerFormActionTypes = createWriteActionTypes(CUSTOMER_EDIT_ID);
export const customerFormActions = createWriteActions(customerFormActionTypes);

export const customerDeletionActionTypes = createDeleteActionTypes(CUSTOMER_DELETION_ID);
export const customerDeletionActions = createDeleteActions(customerDeletionActionTypes);

export const vendorFormActionTypes = createWriteActionTypes(VENDOR_EDIT_ID);
export const vendorFormActions = createWriteActions(vendorFormActionTypes);

export const vendorDeletionActionTypes = createDeleteActionTypes(VENDOR_DELETION_ID);
export const vendorDeletionActions = createDeleteActions(vendorDeletionActionTypes);

export const affiliatedFormActionTypes = createWriteActionTypes(AFFILIATED_EDIT_ID);
export const affiliatedFormActions = createWriteActions(affiliatedFormActionTypes);

export const affiliatedDeletionActionTypes = createDeleteActionTypes(AFFILIATED_DELETION_ID);
export const affiliatedDeletionActions = createDeleteActions(affiliatedDeletionActionTypes);

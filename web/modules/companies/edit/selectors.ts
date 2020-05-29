import { createEntitySelectors } from 'utils/entity';
import {
  AFFILIATED_DELETION_ID,
  AFFILIATED_EDIT_ID,
  COMPANY_EDIT_ID,
  CONTACT_EDIT_ID,
  CUSTOMER_DELETION_ID,
  CUSTOMER_EDIT_ID,
  VENDOR_DELETION_ID,
  VENDOR_EDIT_ID
} from './constants';

export const companyFormSelector = createEntitySelectors(COMPANY_EDIT_ID);
export const contactFormSelector = createEntitySelectors(CONTACT_EDIT_ID);
export const customerFormSelector = createEntitySelectors(CUSTOMER_EDIT_ID);
export const customerDeletionSelector = createEntitySelectors(CUSTOMER_DELETION_ID);
export const vendorFormSelector = createEntitySelectors(VENDOR_EDIT_ID);
export const vendorDeletionSelector = createEntitySelectors(VENDOR_DELETION_ID);
export const affiliatedFormSelector = createEntitySelectors(AFFILIATED_EDIT_ID);
export const affiliatedDeletionSelector = createEntitySelectors(AFFILIATED_DELETION_ID);

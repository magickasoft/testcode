import { api } from 'modules/api';
import { createWriteApi } from 'utils/api';
import { createDeleteApi } from 'utils/api/delete/index';
import {
  COMPANY_EDIT_API_URL,
  CONTACT_EDIT_API_URL,
  CUSTOMER_DELETION_API_URL,
  CUSTOMER_EDIT_API_URL,
  VENDOR_DELETION_API_URL,
  VENDOR_EDIT_API_URL,
  AFFILIATED_EDIT_API_URL,
  AFFILIATED_DELETION_API_URL
} from './constants';

export const companyEditApi = createWriteApi(api, { url: COMPANY_EDIT_API_URL });
export const contactEditApi = createWriteApi(api, { url: CONTACT_EDIT_API_URL });
export const customerEditApi = createWriteApi(api, { url: CUSTOMER_EDIT_API_URL });
export const customerDeletionApi = createDeleteApi(api, { url: CUSTOMER_DELETION_API_URL });
export const vendorEditApi = createWriteApi(api, { url: VENDOR_EDIT_API_URL });
export const vendorDeletionApi = createDeleteApi(api, { url: VENDOR_DELETION_API_URL });
export const affiliatedEditApi = createWriteApi(api, { url: AFFILIATED_EDIT_API_URL });
export const affiliatedDeletionApi = createDeleteApi(api, { url: AFFILIATED_DELETION_API_URL });

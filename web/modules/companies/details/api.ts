import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import {
  COMPANY_DETAILS_API_URL,
  CONTACT_DETAILS_API_URL,
  CUSTOMER_DETAILS_API_URL,
  VENDOR_DETAILS_API_URL,
  AFFILIATED_DETAILS_API_URL
} from './constants';

export const companyDetailsApi = createReadApi(api, { url: COMPANY_DETAILS_API_URL });
export const contactDetailsApi = createReadApi(api, { url: CONTACT_DETAILS_API_URL });
export const customerDetailsApi = createReadApi(api, { url: CUSTOMER_DETAILS_API_URL });
export const vendorDetailsApi = createReadApi(api, { url: VENDOR_DETAILS_API_URL });
export const affiliatedDetailsApi = createReadApi(api, { url: AFFILIATED_DETAILS_API_URL });

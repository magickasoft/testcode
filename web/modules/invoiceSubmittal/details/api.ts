import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { INVOICE_SUBMITTAL_DETAILS_API_URL } from './constants';

export const invoiceSubmittalDetailsApi = createReadApi(api, { url: INVOICE_SUBMITTAL_DETAILS_API_URL });

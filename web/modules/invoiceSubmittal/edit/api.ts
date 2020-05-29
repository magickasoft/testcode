import { api } from 'modules/api';
import { createWriteApi } from 'utils/api';
import { INVOICE_SUBMITTAL_EDIT_API_URL } from './constants';

export const invoiceSubmittalEditApi = createWriteApi(api, { url: INVOICE_SUBMITTAL_EDIT_API_URL });

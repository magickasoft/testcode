import { api } from 'modules/api';
import { createDeleteApi } from 'utils/api/delete';

import { INVOICE_SUBMITTAL_DELETION_API_URL } from './constants';

export const invoiceSubmittalDeleteApi = createDeleteApi(api, { url: INVOICE_SUBMITTAL_DELETION_API_URL });

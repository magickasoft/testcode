import { api } from 'modules/api';
import { createDeleteApi } from 'utils/api/delete';

import { RETAIL_DELETION_API_URL } from './constants';

export const retailDeleteApi = createDeleteApi(api, { url: RETAIL_DELETION_API_URL });

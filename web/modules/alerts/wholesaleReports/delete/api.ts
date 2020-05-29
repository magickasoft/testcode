import { api } from 'modules/api';
import { createDeleteApi } from 'utils/api/delete';

import { WHOLESALE_DELETION_API_URL } from './constants';

export const wholesaleDeleteApi = createDeleteApi(api, { url: WHOLESALE_DELETION_API_URL });

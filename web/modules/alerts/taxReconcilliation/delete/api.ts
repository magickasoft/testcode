import { api } from 'modules/api';
import { createDeleteApi } from 'utils/api/delete';

import { TAX_RECONCILLIATION_DELETION_API_URL } from './constants';

export const taxReconcilliationDeleteApi = createDeleteApi(api, { url: TAX_RECONCILLIATION_DELETION_API_URL });

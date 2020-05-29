import { api } from 'modules/api';
import { createWriteApi } from 'utils/api';
import { TAX_RECONCILLIATION_EDIT_API_URL } from './constants';

export const taxReconcilliationEditApi = createWriteApi(api, { url: TAX_RECONCILLIATION_EDIT_API_URL });

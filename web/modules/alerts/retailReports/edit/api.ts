import { api } from 'modules/api';
import { createWriteApi } from 'utils/api';
import { RETAIL_EDIT_API_URL } from './constants';

export const retailEditApi = createWriteApi(api, { url: RETAIL_EDIT_API_URL });

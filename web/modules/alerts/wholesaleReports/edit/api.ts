import { api } from 'modules/api';
import { createWriteApi } from 'utils/api';
import { WHOLESALE_EDIT_API_URL } from './constants';

export const wholesaleEditApi = createWriteApi(api, { url: WHOLESALE_EDIT_API_URL });

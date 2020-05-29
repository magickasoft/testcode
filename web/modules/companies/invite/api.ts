import { salesforceApi } from 'modules/api';
import { createWriteApi } from 'utils/api';
import { COMPANY_INVITE_API_URL } from './constants';

export const companyInviteApi = createWriteApi(salesforceApi, { url: COMPANY_INVITE_API_URL });

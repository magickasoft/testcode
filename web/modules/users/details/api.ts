import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';

export const USER_DETAILS_API_URL = '/user-list';
export const USER_RESET_PASSWORD_API_URL = '/user-password-reset-url';

export const userDetailsApi = createReadApi(api, { url: USER_DETAILS_API_URL });
export const userResetPasswordApi = createReadApi(api, { url: USER_RESET_PASSWORD_API_URL });

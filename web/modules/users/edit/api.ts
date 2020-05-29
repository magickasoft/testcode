import { api, mfaAuthApi } from 'modules/api';
import { createWriteApi } from 'utils/api/write';

const userWriteApiUrl = '/user';
const userResetAccessWriteApiUrl = '/password-reset';

export const userWriteApi = createWriteApi(api, { url: userWriteApiUrl });
export const userResetAccessWriteApi = createWriteApi(mfaAuthApi, { url: userResetAccessWriteApiUrl });

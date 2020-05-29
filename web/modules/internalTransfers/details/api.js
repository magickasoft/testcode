import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';

export const internalTransferApiUrl = '/internal-transfer-list';
export const internalTransferApi = createReadApi(api, { url: internalTransferApiUrl });

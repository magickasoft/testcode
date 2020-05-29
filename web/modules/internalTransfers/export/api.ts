import { api } from 'modules/api';
import { createWriteApi } from 'utils/api/write';
import { createReadApi } from 'utils/api/read';

const internalTransferExportReadApiUrl = '/internal-transfers-export-list';
const internalTransferExportWriteApiUrl = '/internal-transfers-export';

export const internalTransferExportWriteApi = createWriteApi(api, { url: internalTransferExportWriteApiUrl });
export const internalTransferExportReadApi = createReadApi(api, { url: internalTransferExportReadApiUrl });

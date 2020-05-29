import { api } from 'modules/api';
import { createWriteApi } from 'utils/api/write';
import { createUploadApi } from 'utils/api/upload';

const documentPeriodWriteApiUrl = '/document-period';
const documentFileWriteApiUrl = '/document-file';
const documentWriteApiUrl = '/document';
const documentPeriodFileUploadApiUrl = '/document-file-upload';

export const documentPeriodWriteApi = createWriteApi(api, { url: documentPeriodWriteApiUrl });
export const documentFileWriteApi = createWriteApi(api, { url: documentFileWriteApiUrl });
export const documentWriteApi = createWriteApi(api, { url: documentWriteApiUrl });
export const documentPeriodFileUploadApi = createUploadApi(api, { url: documentPeriodFileUploadApiUrl });

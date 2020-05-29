import { api } from 'modules/api';

export const getOrganizationSetting = () => api.post('/organization-setting-list').then(({ data }) => data);

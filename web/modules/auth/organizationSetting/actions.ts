import { organizationSettingActionTypes } from './constants';

export const getOrganizationSetting = () => ({ type: organizationSettingActionTypes.GET_ORGANIZATION_SETTING });

export const setOrganizationSetting = (payload) => ({
  payload,
  type: organizationSettingActionTypes.SET_ORGANIZATION_SETTING
});

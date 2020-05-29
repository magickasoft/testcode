import { organizationSettingActionTypes } from './constants';
import { logoutActionTypes } from '../logout/constants';

export function organizationSetting(state = null, { type, payload }) {
  switch (type) {
    case organizationSettingActionTypes.GET_ORGANIZATION_SETTING:
      return null;
    case organizationSettingActionTypes.SET_ORGANIZATION_SETTING:
      return payload;
    case logoutActionTypes.AUTH_LOGOUT:
      return null;
    default:
      return state;
  }
}

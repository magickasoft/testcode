import { combineReducers } from 'redux';
import { organization } from './organization/reducer';
import { organizationSetting } from './organizationSetting/reducer';
import { token } from './token/reducer';
import { user } from './user/reducer';

export const authReducer = combineReducers({ organization, organizationSetting, token, user });

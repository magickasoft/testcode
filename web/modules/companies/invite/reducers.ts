import { createWriteReducer } from 'utils/api';
import { companyInviteActionTypes } from './actions';
import { CompanyInviteModel } from './models';

export const companyInviteReducer = createWriteReducer(companyInviteActionTypes, new CompanyInviteModel());

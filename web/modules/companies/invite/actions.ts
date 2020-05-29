import { createWriteActions, createWriteActionTypes } from 'utils/api';
import { COMPANY_INVITE_ID } from './constants';

export const companyInviteActionTypes = createWriteActionTypes(COMPANY_INVITE_ID);
export const companyInviteActions = createWriteActions(companyInviteActionTypes);

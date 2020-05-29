import { createReadActions, createReadActionTypes } from 'utils/api/read';
import { USER_DETAILS_ID, USER_RESET_PASSWORD_LINK_ID } from './constants';

export const userDetailsActionsTypes = createReadActionTypes(USER_DETAILS_ID);
export const userDetailsActions = createReadActions(userDetailsActionsTypes);

export const userResetPasswordLinkActionsTypes = createReadActionTypes(USER_RESET_PASSWORD_LINK_ID);
export const userResetPasswordLinkActions = createReadActions(userResetPasswordLinkActionsTypes);

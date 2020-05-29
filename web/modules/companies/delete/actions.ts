import { createDeleteActions, createDeleteActionTypes } from 'utils/api/delete';
import { COMPANY_DELETION_ID } from './constants';

export const companyDeleteActionsTypes = createDeleteActionTypes(COMPANY_DELETION_ID);
export const companyDeleteActions = createDeleteActions(companyDeleteActionsTypes);

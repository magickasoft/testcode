import { createWriteReducer } from 'utils/api/write';
import { userFormActionTypes, userResetAccessFormActionTypes } from './actions';
import { UserFormModel, ResetUserAccessFormModel } from './models';

export const userFormReducer = createWriteReducer(userFormActionTypes, new UserFormModel());

export const userResetAccessFormReducer = createWriteReducer(
  userResetAccessFormActionTypes,
  new ResetUserAccessFormModel()
);

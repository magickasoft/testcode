import { createWriteSaga } from 'utils/api/write';
import { history } from 'modules/router';
import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import { USERS_LIST_PAGE_PATH } from 'modules/users/list';
import { forceTableUpdate } from 'modules/tables';
import {
  userFormActionTypes,
  userFormActions,
  userResetAccessFormActionTypes,
  userResetAccessFormActions
} from './actions';
import { userWriteApi, userResetAccessWriteApi } from './api';

function* userWriteCompletedHandler() {
  history.push(USERS_LIST_PAGE_PATH);
  yield put(forceTableUpdate('users'));
}

function* invitationSentHandler() {
  yield call(history.push, USERS_LIST_PAGE_PATH as any);
}

export function* manageUserSaga() {
  yield spawn(createWriteSaga(userFormActionTypes, userFormActions, userWriteApi));
  yield spawn(createWriteSaga(userResetAccessFormActionTypes, userResetAccessFormActions, userResetAccessWriteApi));
  yield takeLatest(userFormActionTypes.write.completed, userWriteCompletedHandler);
  yield takeLatest(userResetAccessFormActionTypes.write.completed, invitationSentHandler);
}

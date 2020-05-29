import { select, put, spawn, takeLatest } from 'redux-saga/effects';
import { createReadSaga } from 'utils/api/read';
import {
  userFormActions,
  UserFormModel,
  userResetAccessFormActions,
  ResetUserAccessFormModel,
  userResetAccessFormSelector
} from 'modules/users/edit';
import {
  userDetailsActions,
  userDetailsActionsTypes,
  userResetPasswordLinkActionsTypes,
  userResetPasswordLinkActions
} from './actions';
import { userDetailsApi, userResetPasswordApi } from './api';

function* userLoadedSaga({ payload: { records } }) {
  const details = records.length ? records[0] : null;

  if (details) {
    yield put(
      userFormActions.value.set(
        new UserFormModel().setValue({
          ...details,
          active: !!details.active
        })
      )
    );

    yield put(
      userResetAccessFormActions.value.set(
        new ResetUserAccessFormModel().setValue({
          id: 0,
          login: details.email
        })
      )
    );

    yield put(userResetPasswordLinkActions.read.call(new UserFormModel().setValue(details)));
  }
}

function* resetLinkFetchedHandler({ payload }) {
  const form = yield select(userResetAccessFormSelector.getEntity);

  yield put(
    userResetAccessFormActions.value.set(
      form.setValue({
        ...form.getValue(),
        url: payload.url
      })
    )
  );
}

export function* userDetailsSaga() {
  yield spawn(createReadSaga(userDetailsActionsTypes, userDetailsActions, userDetailsApi));
  yield spawn(createReadSaga(userResetPasswordLinkActionsTypes, userResetPasswordLinkActions, userResetPasswordApi));
  yield takeLatest(userDetailsActionsTypes.read.completed as any, userLoadedSaga);
  yield takeLatest(userResetPasswordLinkActionsTypes.read.completed as any, resetLinkFetchedHandler);
}

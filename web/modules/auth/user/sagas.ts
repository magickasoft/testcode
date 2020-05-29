import { takeLatest, call, put } from 'redux-saga/effects';
import { licenseListActions } from 'modules/licenses/list';
import { companiesListActions } from 'modules/companies/list';
import { FormModel } from 'utils/form';
import errorHandler from 'utils/error';
import { userActionTypes } from './constants';
import { getUser } from './effects';
import { setUser } from './actions';
import { getOrganization } from '../organization/actions';
import { getOrganizationSetting } from '../organizationSetting/actions';
import { logout } from '../logout/actions';

const EmptyModel = FormModel.Factory({});

function* userHandler() {
  try {
    const user = yield call(getUser);

    errorHandler.configureUser({
      id: user.id,
      email: user.email,
      username: `${user.first_name} ${user.last_name}`
    });

    yield put(setUser(user));
    yield put(getOrganization());
    yield put(getOrganizationSetting());
    yield put(companiesListActions.read.call(new EmptyModel()));
    yield put(licenseListActions.read.call(new EmptyModel()));
  } catch (error) {
    // @TODO: handle js errors without logout
    if (!(error instanceof TypeError)) {
      yield put(logout());
    }

    errorHandler.error(error);
  }
}

export function* userSaga() {
  yield takeLatest(userActionTypes.GET_USER_INFO, userHandler);
}

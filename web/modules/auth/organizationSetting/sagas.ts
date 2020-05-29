import { takeLatest, call, put } from 'redux-saga/effects';
import { organizationSettingActionTypes } from './constants';
import { getOrganizationSetting } from './effects';
import { setOrganizationSetting } from './actions';

function* organizationSettingHandler() {
  try {
    const response = yield call(getOrganizationSetting);
    yield put(setOrganizationSetting(response?.records[0]));
  } catch (error) {
    yield put(setOrganizationSetting(null));
  }
}

export function* organizationSettingSaga() {
  yield takeLatest(organizationSettingActionTypes.GET_ORGANIZATION_SETTING, organizationSettingHandler);
}

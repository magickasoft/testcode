/* eslint-disable camelcase */

import { put, spawn, takeLatest, call } from 'redux-saga/effects';
import { history } from 'modules/router';
import { createReadSaga } from 'utils/api/read';
import { companyDetailsActions, CompanyDetailsModel } from 'modules/companies/details';
import { licenseDetailsActions, LicenseDetailsFilterModel } from 'modules/licenses/details';
import {
  documentPeriodFormActionTypes,
  documentPeriodUploadActionTypes,
  documentFileFormActions,
  documentFileFormActionTypes,
  DocumentFileFormModel,
  DocumentPeriodFormModel,
  documentPeriodFormActions
} from 'modules/documents/edit';
import { forceTableUpdate } from 'modules/tables';
import { documentsFileDeleteActionsTypes, documentPeriodDeleteActionsTypes } from 'modules/documents/delete';
import {
  documentPeriodsActions,
  documentPeriodsActionsTypes,
  documentsDetailsActions,
  documentsDetailsActionsTypes,
  documentFileDetailsActionsTypes,
  documentFileDetailsActions
} from './actions';
import { documentFileDetailsApi, documentPeriodsApi, documentsDetailsApi } from './api';
import { DocumentPeriodsFilterModel, DocumentsDetailsFilterModel } from './models';

function* documentLoadedSaga({ payload: { records } }) {
  const document = records.length ? records[0] : null;

  if (document?.company_id) {
    yield put(companyDetailsActions.read.call(new CompanyDetailsModel().setValue({ id: document.company_id })));
  }

  if (document?.license_id) {
    yield put(licenseDetailsActions.read.call(new LicenseDetailsFilterModel().setValue({ id: document.license_id })));
  }

  yield put(
    documentPeriodsActions.read.call(
      new DocumentPeriodsFilterModel().setValue({
        _options: {
          filters: [
            {
              field: 'document_id',
              type: 'eq',
              value: document.id
            }
          ],
          orders: [{ field: 'end_date', direction: 'DESC' }]
        }
      })
    )
  );
}

function* documentFileLoadedSaga({ payload: { records } }) {
  const file = records.length ? records[0] : null;

  if (file) {
    yield put(documentFileFormActions.value.set(new DocumentFileFormModel().setValue(file)));
  }
}

function* documentPeriodLoadedSaga({ payload: { records } }) {
  const period = records.length ? records[0] : null;

  if (period) {
    yield put(documentPeriodFormActions.value.set(new DocumentPeriodFormModel().setValue(period)));
  }
}

function* periodUpdatedSaga(returnPath: string, { payload }) {
  yield put(documentsDetailsActions.read.call(new DocumentsDetailsFilterModel().setValue({ id: payload.document_id })));
  yield call(history.push, returnPath as any);
  yield put(forceTableUpdate('documents-periods'));
}

function* periodBeingSaved({ payload }) {
  const plain = payload.getValue();
  yield takeLatest(documentPeriodFormActionTypes.write.completed, periodUpdatedSaga.bind(this, plain.return_path));
}

function* periodFileSetChanged() {
  yield put(forceTableUpdate('documents-period-files'));
  yield put(forceTableUpdate('documents-files-approval'));
}

function* periodsSetChanged() {
  yield put(forceTableUpdate('documents-periods'));
}

export function* documentsDetailsSaga() {
  yield spawn(createReadSaga(documentsDetailsActionsTypes, documentsDetailsActions, documentsDetailsApi));
  yield spawn(createReadSaga(documentFileDetailsActionsTypes, documentFileDetailsActions, documentFileDetailsApi));
  yield spawn(createReadSaga(documentPeriodsActionsTypes, documentPeriodsActions, documentPeriodsApi));
  yield takeLatest(documentsDetailsActionsTypes.read.completed as any, documentLoadedSaga);
  yield takeLatest(documentFileDetailsActionsTypes.read.completed as any, documentFileLoadedSaga);
  yield takeLatest(documentPeriodsActionsTypes.read.completed as any, documentPeriodLoadedSaga);
  yield takeLatest(documentPeriodFormActionTypes.write.call as any, periodBeingSaved);
  yield takeLatest(documentPeriodUploadActionTypes.upload.completed as any, periodFileSetChanged);
  yield takeLatest(documentsFileDeleteActionsTypes.delete.completed, periodFileSetChanged);
  yield takeLatest(documentPeriodDeleteActionsTypes.delete.completed, periodsSetChanged);
  yield takeLatest(documentFileFormActionTypes.write.completed, periodFileSetChanged);
}

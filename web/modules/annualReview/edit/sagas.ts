import { createDeleteSaga } from 'utils/api/delete/index';
import { createWriteSaga } from 'utils/api/write/index';
import { takeLatest, put, spawn, select, call } from 'redux-saga/effects';
import { annualReviewDetailsActionsTypes } from 'modules/annualReview/details';
import { push } from 'modules/router';
import { annualReviewFormSelector } from './selectors';
import { annualReviewDeleteActions, annualReviewWriteActions } from './actions';
import { annualReviewDeleteActionTypes, annualReviewWriteActionTypes } from './constants';
import { annualReviewDeleteApi, annualReviewWriteApi } from './api';
import { annualReviewQuestionarieData } from '../selectors/annualReviewQuestionnaire';
import { getAnnualReviewDetailUrl } from '../details/route';

/**
 * Form initialization.
 */

function* formInitializeHandler(action) {
  const annualReviewForm = yield select(annualReviewFormSelector.getEntity);
  if (action.payload.records.length === 1) {
    const value = action.payload.records[0];
    const form = annualReviewForm
      .setValue({
        ...value,
        questionnaire: annualReviewQuestionarieData(value.questionnaire)
      })
      .setInitialValue({
        ...value,
        questionnaire: annualReviewQuestionarieData(value.questionnaire)
      })
      .ready();

    yield put(annualReviewWriteActions.value.set(form));
  }
}

function* annualReviewFormSaga() {
  yield takeLatest(annualReviewDetailsActionsTypes.read.completed, formInitializeHandler);
}

function* annualReviewDeletionSaga() {
  yield spawn(createDeleteSaga(annualReviewDeleteActionTypes, annualReviewDeleteActions, annualReviewDeleteApi));

  // yield takeLatest(annualReviewDeleteActionTypes.delete.completed, deleteCompletedHandler);
}

/**
 * Update internal transfer.
 */

function* addCompletedHandler() {
  const form = yield select(annualReviewFormSelector.getEntity);
  const value = form.getValue();

  yield call(push, getAnnualReviewDetailUrl({ companyId: value.company_id, id: value.id }));
}

export function* annualReviewUpdateSaga() {
  yield spawn(createWriteSaga(annualReviewWriteActionTypes, annualReviewWriteActions, annualReviewWriteApi));

  yield takeLatest(annualReviewWriteActionTypes.write.completed, addCompletedHandler);
}

/**
 * Main saga.
 */

export function* annualReviewEditSaga() {
  yield spawn(annualReviewFormSaga);
  yield spawn(annualReviewUpdateSaga);
  yield spawn(annualReviewDeletionSaga);
}

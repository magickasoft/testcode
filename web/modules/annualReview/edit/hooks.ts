// import * as React from "react";
import * as React from 'react';
import { push } from 'modules/router';
import { useSelector, useDispatch } from 'react-redux';
import { FormFieldModel } from 'utils/form/FormFieldModel';
import { annualReviewQuestionarieString } from 'modules/annualReview/selectors/annualReviewQuestionnaire';
import { annualReviewFormSelector } from './selectors';
import { annualReviewWriteActions } from './actions';
import { getAnnualReviewDeleteUrl } from './route';

export const useAnnualReviewForm = ({ companyId, id }) => {
  const dispatch = useDispatch();
  const value = useSelector(annualReviewFormSelector.getEntity);

  const onChange = React.useCallback((value) => dispatch(annualReviewWriteActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => {
    // questionnaire is a json parsed fueld actually
    const questionnaireField = value.getField('questionnaire');
    const questionnaire = questionnaireField.getValue();
    const questionnaireString = annualReviewQuestionarieString(questionnaire);

    dispatch(
      annualReviewWriteActions.write.call(value.setField('questionnaire', new FormFieldModel(questionnaireString)))
    );
  }, [value]);

  const onDelete = React.useCallback(() => push(getAnnualReviewDeleteUrl({ companyId, id })), [value]);

  return [value, onChange, onSubmit, onDelete];
};

import * as React from 'react';
import { RouterComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'modules/router/effects';
import { documentsDetailsSelector, documentPeriodsSelector } from 'modules/documents/details';
import { EditPeriodForm } from '../components/EditPeriodForm';
import { documentPeriodFormSelector } from '../selectors';
import { documentPeriodFormActions } from '../actions';
import { DocumentPeriodFormModel } from '../models';

interface Properties {
  closePath: string;
  deletePath: string;
}

export const EditDocumentPeriodDialog = React.memo((properties: Properties & RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    deletePath,
    closePath,
    match: {
      params: { periodId, id }
    }
  } = properties;
  const value = useSelector(documentPeriodFormSelector.getEntity);
  const document = useSelector(documentsDetailsSelector.getEntity);
  const periods = useSelector(documentPeriodsSelector.getEntity);

  React.useEffect(() => {
    if (+periodId) {
      const plainPeriods = periods.getValue();
      const period = plainPeriods.find((i) => +i.id === +periodId);

      if (period) {
        dispatch(documentPeriodFormActions.value.set(new DocumentPeriodFormModel().setValue(period)));
      }
    } else {
      dispatch(documentPeriodFormActions.value.set(new DocumentPeriodFormModel().setValue({ document_id: +id })));
    }
  }, [periods]);

  const onChange = React.useCallback((value) => dispatch(documentPeriodFormActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => {
    dispatch(
      documentPeriodFormActions.write.call(
        value.setValue({
          ...value.getValue(),
          return_path: closePath
        })
      )
    );
  }, [value]);

  const onCancel = React.useCallback(() => push(closePath), [value]);

  const goToDelete = React.useCallback(() => {
    push(deletePath);
  }, []);

  return (
    <EditPeriodForm
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={goToDelete}
      documentName={document?.getValue()[0]?.name}
    />
  );
});

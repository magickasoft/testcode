import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { Confirm } from 'components/Dialog';
import { documentPeriodDeleteActions } from '../actions';
import { DocumentPeriodDeleteFilterModel } from '../models';

interface Properties {
  closePath: string;
}

export const DeleteDocumentPeriodDialog = React.memo((properties: Properties & RouterComponentProps) => {
  const {
    history,
    match: {
      params: { periodId }
    },
    closePath
  } = properties;

  const dispatch = useDispatch();

  const deleteDocumentPeriod = React.useCallback(() => {
    dispatch(
      documentPeriodDeleteActions.delete.call(new DocumentPeriodDeleteFilterModel().setValue({ id: +periodId }))
    );
    history.push(closePath);
  }, [periodId]);

  const closeDialog = React.useCallback(() => {
    history.push(closePath);
  }, []);

  return (
    <Confirm value={null} onClose={closeDialog} onSubmit={deleteDocumentPeriod} buttons-submit-children="Delete">
      Are you sure want to delete this period?
    </Confirm>
  );
});

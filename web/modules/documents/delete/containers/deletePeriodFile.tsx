import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { Confirm } from 'components/Dialog';
import { documentsFileDeleteActions } from '../actions';
import { DocumentsFileDeleteFilterModel } from '../models';

interface Properties {
  closePath: string;
}

export const DeleteDocumentFileDialog = React.memo((properties: Properties & RouterComponentProps) => {
  const {
    history,
    match: {
      params: { fileId }
    },
    closePath
  } = properties;

  const dispatch = useDispatch();

  const deleteDocumentFile = React.useCallback(() => {
    dispatch(documentsFileDeleteActions.delete.call(new DocumentsFileDeleteFilterModel().setValue({ id: +fileId })));
    history.push(closePath);
  }, [fileId]);

  const closeDialog = React.useCallback(() => {
    history.push(closePath);
  }, []);

  return (
    <Confirm value={null} onClose={closeDialog} onSubmit={deleteDocumentFile} buttons-submit-children="Delete">
      Are you sure want to delete this file?
    </Confirm>
  );
});

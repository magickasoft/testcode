import * as React from 'react';
import { RouterComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'modules/router/effects';
import { documentFileDetailsActions, DocumentFileDetailsFilterModel } from 'modules/documents/details';
import { EditFileForm } from '../components/EditFileForm';
import { documentFileFormSelector } from '../selectors';
import { documentFileFormActions } from '../actions';

interface Properties {
  closePath: string;
  deletePath: string;
}

export const EditDocumentFileDialog = React.memo((properties: Properties & RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    deletePath,
    closePath,
    match: {
      params: { fileId }
    }
  } = properties;
  const value = useSelector(documentFileFormSelector.getEntity);

  React.useEffect(() => {
    dispatch(documentFileDetailsActions.read.call(new DocumentFileDetailsFilterModel().setValue({ id: +fileId })));
  }, []);

  const onChange = React.useCallback((value) => dispatch(documentFileFormActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => {
    dispatch(documentFileFormActions.write.call(value));
    push(closePath);
  }, [value]);

  const onCancel = React.useCallback(() => push(closePath), [value]);

  const goToDelete = React.useCallback(() => {
    push(deletePath);
  }, []);

  return (
    <EditFileForm value={value} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel} onDelete={goToDelete} />
  );
});

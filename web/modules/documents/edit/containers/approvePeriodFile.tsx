import * as React from 'react';
import { RouterComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'modules/router/effects';
import { documentFileDetailsActions, DocumentFileDetailsFilterModel } from 'modules/documents/details';
import { ApproveRejectFileForm } from '../components/ApproveRejectFileForm';
import { documentFileFormSelector } from '../selectors';
import { documentFileFormActions } from '../actions';

interface Properties {
  closePath: string;
}

export const ApproveDocumentFileDialog = React.memo((properties: Properties & RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
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
    const plain = value.getValue();
    dispatch(
      documentFileFormActions.write.call(
        value.setValue({
          ...plain,
          status: 'approved'
        })
      )
    );
    push(closePath);
  }, [value]);

  const onCancel = React.useCallback(() => push(closePath), [value]);

  return (
    <ApproveRejectFileForm kind="approve" value={value} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel} />
  );
});

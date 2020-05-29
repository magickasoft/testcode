import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { documentFormSelector } from 'modules/documents/edit';
import { documentDeleteActions } from '../actions';
import { DeleteDocument } from '../components/DeleteDocument';

interface Properties {
  onClose: () => any;
}

export const DeleteDocumentContainer = (properties: Properties & RouteComponentProps) => {
  const dispatch = useDispatch();
  const managedDocument = useSelector(documentFormSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(documentDeleteActions.delete.call(managedDocument)), [
    managedDocument
  ]);

  return <DeleteDocument value={managedDocument} onDelete={onDelete} onClose={properties.onClose} />;
};

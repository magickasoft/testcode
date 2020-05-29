import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { wholesaleFormSelector } from 'modules/alerts/wholesaleReports/edit';
import { wholesaleDeleteActions } from './actions';
import { DeleteReport } from './components/DeleteReport';

interface Properties {
  onClose: () => any;
}

export const DeleteReportContainer = (properties: Properties & RouteComponentProps) => {
  const dispatch = useDispatch();
  const wholesaleForm = useSelector(wholesaleFormSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(wholesaleDeleteActions.delete.call(wholesaleForm)), [
    wholesaleForm
  ]);

  return <DeleteReport value={wholesaleForm} onDelete={onDelete} onClose={properties.onClose} />;
};

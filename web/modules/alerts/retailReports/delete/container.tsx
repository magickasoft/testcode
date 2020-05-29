import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { retailFormSelector } from 'modules/alerts/retailReports/edit';
import { retailDeleteActions } from './actions';
import { DeleteReport } from './components/DeleteReport';

interface Properties {
  onClose: () => any;
}

export const DeleteReportContainer = (properties: Properties & RouteComponentProps) => {
  const dispatch = useDispatch();
  const wholesaleForm = useSelector(retailFormSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(retailDeleteActions.delete.call(wholesaleForm)), [wholesaleForm]);

  return <DeleteReport value={wholesaleForm} onDelete={onDelete} onClose={properties.onClose} />;
};

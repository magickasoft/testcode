import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { invoiceSubmittalFormSelector } from 'modules/invoiceSubmittal/edit';
import { invoiceSubmittalDeleteActions } from './actions';
import { DeleteReport } from './components/DeleteReport';

interface Properties {
  onClose: () => any;
}

export const DeleteReportContainer = (properties: Properties & RouteComponentProps) => {
  const dispatch = useDispatch();
  const invoiceSubmittalForm = useSelector(invoiceSubmittalFormSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(invoiceSubmittalDeleteActions.delete.call(invoiceSubmittalForm)), [
    invoiceSubmittalForm
  ]);

  return <DeleteReport value={invoiceSubmittalForm} onDelete={onDelete} onClose={properties.onClose} />;
};

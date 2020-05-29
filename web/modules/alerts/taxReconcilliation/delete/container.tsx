import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { taxReconcilliationFormSelector } from 'modules/alerts/taxReconcilliation/edit';
import { taxReconcilliationDeleteActions } from './actions';
import { DeleteReport } from './components/DeleteReport';

interface Properties {
  onClose: () => any;
}

export const DeleteReportContainer = (properties: Properties & RouteComponentProps) => {
  const dispatch = useDispatch();
  const taxReconcilliationForm = useSelector(taxReconcilliationFormSelector.getEntity);

  const onDelete = React.useCallback(
    () => dispatch(taxReconcilliationDeleteActions.delete.call(taxReconcilliationForm)),
    [taxReconcilliationForm]
  );

  return <DeleteReport value={taxReconcilliationForm} onDelete={onDelete} onClose={properties.onClose} />;
};

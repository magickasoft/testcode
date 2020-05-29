import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { companyFormSelector } from 'modules/companies/edit';
import { companyDeleteActions } from './actions';
import { DeleteCompany } from './components/DeleteCompany';

interface Props {
  onClose: () => any;
}

export const DeleteCompanyContainer = (properties: Props & RouteComponentProps) => {
  const dispatch = useDispatch();
  const managedCompany = useSelector(companyFormSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(companyDeleteActions.delete.call(managedCompany)), [
    managedCompany
  ]);

  return <DeleteCompany value={managedCompany} onDelete={onDelete} onClose={properties.onClose} />;
};

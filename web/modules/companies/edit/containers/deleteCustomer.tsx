import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { CustomerDetailsFilterModel, customerDetailsActions } from 'modules/companies/details';
import { customerDeletionActions } from '../actions';
import { customerDeletionSelector } from '../selectors';
import { DeleteCustomer } from '../components/DeleteCustomer';

interface Properties {
  onClose: () => any;
}

export const DeleteCustomerDialog = (properties: Properties & RouteComponentProps) => {
  const {
    match: {
      params: { customerId }
    }
  } = properties;
  const dispatch = useDispatch();
  const managedCustomer = useSelector(customerDeletionSelector.getEntity);

  React.useEffect(() => {
    if (+customerId) {
      dispatch(customerDetailsActions.read.call(new CustomerDetailsFilterModel().setValue({ id: +customerId })));
    }
  }, []);

  React.useEffect(() => {
    dispatch(customerDeletionActions.value.set(managedCustomer));
  }, [managedCustomer]);

  const value = useSelector(customerDeletionSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(customerDeletionActions.delete.call(value)), [value]);

  return <DeleteCustomer value={value} onDelete={onDelete} onClose={properties.onClose} />;
};

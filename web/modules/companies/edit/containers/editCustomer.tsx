import * as React from 'react';
import { push } from 'modules/router/effects';
import { customerDetailsActions, CustomerDetailsFilterModel } from 'modules/companies/details';
import { useDispatch, useSelector } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { companiesListSelectors, COMPANIES_LIST_PATH } from 'modules/companies/list';
import { customerFormActions } from '../actions';
import { CustomerFormModel } from '../models';
import { customerFormSelector } from '../selectors';
import { EditCustomerForm } from '../components/EditCustomerForm';

export const EditCustomerDialog = (props: RouterComponentProps) => {
  const companies = useSelector(companiesListSelectors.getEntity);
  const dispatch = useDispatch();
  const {
    match: {
      params: { id, customerId }
    }
  } = props;
  const value = useSelector(customerFormSelector.getEntity);
  const plainValue = value.getValue();

  React.useEffect(() => {
    if (+customerId) {
      dispatch(customerDetailsActions.read.call(new CustomerDetailsFilterModel().setValue({ id: +customerId })));
    } else {
      dispatch(customerFormActions.value.set(new CustomerFormModel().setValue({ company_id: +id })));
    }
  }, []);

  const onChange = React.useCallback(
    (form) => {
      dispatch(customerFormActions.value.set(form));
    },
    [plainValue]
  );

  const onSubmit = React.useCallback(() => {
    dispatch(customerFormActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(`${COMPANIES_LIST_PATH}/detail/${id}`), [value]);

  return (
    <EditCustomerForm value={value} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel} companies={companies} />
  );
};

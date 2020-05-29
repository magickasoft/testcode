import * as React from 'react';
import { push } from 'modules/router/effects';
import { VendorDetailsFilterModel, vendorDetailsActions } from 'modules/companies/details';
import { useDispatch, useSelector } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { companiesListSelectors, COMPANIES_LIST_PATH } from 'modules/companies/list';
import { vendorFormActions } from '../actions';
import { VendorFormModel } from '../models';
import { vendorFormSelector } from '../selectors';
import { EditVendorForm } from '../components/EditVendorForm';

export const EditVendorDialog = (props: RouterComponentProps) => {
  const companies = useSelector(companiesListSelectors.getEntity);
  const dispatch = useDispatch();
  const {
    match: {
      params: { id, vendorId }
    }
  } = props;
  const value = useSelector(vendorFormSelector.getEntity);
  const plainValue = value.getValue();

  React.useEffect(() => {
    if (+vendorId) {
      dispatch(vendorDetailsActions.read.call(new VendorDetailsFilterModel().setValue({ id: +vendorId })));
    } else {
      dispatch(vendorFormActions.value.set(new VendorFormModel().setValue({ company_id: +id })));
    }
  }, []);

  const onChange = React.useCallback(
    (form) => {
      dispatch(vendorFormActions.value.set(form));
    },
    [plainValue]
  );

  const onSubmit = React.useCallback(() => {
    dispatch(vendorFormActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(`${COMPANIES_LIST_PATH}/detail/${id}`), [value]);

  return (
    <EditVendorForm value={value} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel} companies={companies} />
  );
};

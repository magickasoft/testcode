import * as React from 'react';
import { push } from 'modules/router/effects';
import { AffiliatedDetailsFilterModel, affiliatedDetailsActions } from 'modules/companies/details';
import { useDispatch, useSelector } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { affiliatedFormActions } from '../actions';
import { AffiliatedFormModel } from '../models';
import { affiliatedFormSelector } from '../selectors';
import { EditAffiliatedForm } from '../components/EditAffiliatedForm';

export const EditAffiliatedDialog = (props: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id, affiliatedId }
    }
  } = props;
  const value = useSelector(affiliatedFormSelector.getEntity);
  const plainValue = value.getValue();

  React.useEffect(() => {
    if (+affiliatedId) {
      dispatch(affiliatedDetailsActions.read.call(new AffiliatedDetailsFilterModel().setValue({ id: +affiliatedId })));
    } else {
      dispatch(affiliatedFormActions.value.set(new AffiliatedFormModel().setValue({ parent_company_id: +id })));
    }
  }, []);

  const onChange = React.useCallback(
    (form) => {
      dispatch(affiliatedFormActions.value.set(form));
    },
    [plainValue]
  );

  const onSubmit = React.useCallback(() => {
    dispatch(affiliatedFormActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(`${COMPANIES_LIST_PATH}/detail/${id}`), [value]);

  return <EditAffiliatedForm value={value} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel} />;
};

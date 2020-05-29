import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { RouteComponentProps } from 'react-router-dom';
import { CompanyInvite } from './components/CompanyInvite';
import { companyInviteActions } from './actions';
import { companyInviteSelectors } from './selectors';
import { companyDetailsSelectors } from '../details';

export const CompanyInvitationContainer = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const {
    history,
    match: { params }
  } = props;
  const companyEntity = useSelector(companyDetailsSelectors.getEntity);
  const plainCompany = companyEntity.getValue();
  const companyDetails = Array.isArray(plainCompany) && plainCompany.length === 1 ? plainCompany[0] : {};
  const value = useSelector(companyInviteSelectors.getEntity);

  const onChange = React.useCallback((value) => {
    dispatch(companyInviteActions.value.set(value));
  }, []);

  const onSubmit = React.useCallback((value) => {
    dispatch(companyInviteActions.write.call(value));
  }, []);

  const onClose = React.useCallback(() => {
    history.push(`${COMPANIES_LIST_PATH}/detail/${+params.id}`);
  }, []);

  return (
    <CompanyInvite
      companyId={+params.id}
      companyDetails={companyDetails}
      isPending={companyEntity.isPending()}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onClose={onClose}
    />
  );
};

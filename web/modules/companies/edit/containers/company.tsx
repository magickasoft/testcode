import * as React from 'react';
import { DeleteCompanyContainer } from 'modules/companies/delete';
import { Dialog, DialogRoute } from 'components/Dialog';
import { push } from 'modules/router/effects';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import { companyDetailsActions } from 'modules/companies/details/actions';
import { CompanyDetailsModel, companyDetailsSelectors } from 'modules/companies/details';
import { authOrgSelector } from 'modules/auth/selectors';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { COMPANY_ADD_PATH, COMPANY_EDIT_PATH } from 'modules/companies/edit/constants';
import { companyFormSelector } from '../selectors';
import { companyEditActions } from '../actions';
import { CompanyFormModel } from '../models';
import { EditCompanyForm } from '../components/EditCompanyForm';

const company = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const details = useSelector(companyDetailsSelectors.getEntity).getValue();
  const value = useSelector(companyFormSelector.getEntity);
  const organization = useSelector(authOrgSelector);

  React.useEffect(() => {
    dispatch(companyDetailsActions.read.call(new CompanyDetailsModel().setValue({ id: +id || 0 })));
  }, []);

  React.useEffect(() => {
    if (!+id) {
      dispatch(
        companyEditActions.value.set(
          new CompanyFormModel().setValue({
            id: 0,
            organization_id: organization?.id || 0
          })
        )
      );
    }
  }, [id, organization]);

  const onChange = React.useCallback((value) => {
    const plainValue = value.getValue();
    dispatch(
      companyEditActions.value.set(
        value.setValue({
          ...plainValue,
          holding_id: plainValue.is_holding ? null : plainValue.holding_id
        })
      )
    );
  }, []);

  const onSubmit = React.useCallback(() => {
    const plainValue = value.getValue();
    dispatch(
      companyEditActions.write.call(
        value.setValue({
          ...value,
          holding_group_companies_ids: (plainValue.holding_group_companies_ids || []).map((i) => +i)
        })
      )
    );
  }, [value]);

  const onCancel = React.useCallback(() => push(`${COMPANIES_LIST_PATH}/detail/${id}`), [value]);

  const onDelete = React.useCallback(() => push(`${COMPANIES_LIST_PATH}/edit/${id}/delete`), [value]);

  return (
    <EditCompanyForm
      name={Array.isArray(details) ? details[0].name : ''}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={onDelete}
    >
      <Switch>
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/edit/:id/delete`}
          component={DeleteCompanyContainer}
          closePath={`${COMPANIES_LIST_PATH}/edit/${id}`}
          dialog-face={Dialog.FACE_SECONDARY}
        />
      </Switch>
    </EditCompanyForm>
  );
};

export const addCompanyRoute = <Route path={COMPANY_ADD_PATH} component={company} />;
export const editCompanyRoute = <Route path={COMPANY_EDIT_PATH} component={company} />;

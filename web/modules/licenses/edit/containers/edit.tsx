import * as React from 'react';
import * as UrlParse from 'url-parse';
import { DialogRoute } from 'components/Dialog';
import { push } from 'modules/router/effects';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import { licenseDetailsActions } from 'modules/licenses/details/actions';
import { LicenseDetailsFilterModel } from 'modules/licenses/details';
import { companiesListSelectors } from 'modules/companies/list';
import { DeleteLicenseContainer, manageLicensePath } from 'modules/licenses/edit';
import { licenseFormSelector } from '../selectors';
import { licenseWriteActions } from '../actions';
import { LicenseFormModel } from '../models';
import { EditLicenseForm } from '../components/EditLicenseForm';

const edit = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const value = useSelector(licenseFormSelector.getEntity);
  const companies = useSelector(companiesListSelectors.getEntity);
  const parsedUrl = UrlParse.default(window.location.href, true);
  const companyId = +parsedUrl.query.companyId;

  React.useEffect(() => {
    if (+id) {
      dispatch(licenseDetailsActions.read.call(new LicenseDetailsFilterModel().setValue({ id: +id })));
    } else {
      dispatch(licenseWriteActions.value.set(new LicenseFormModel().setValue({ company_id: companyId })));
    }
  }, []);

  const onChange = React.useCallback((value) => dispatch(licenseWriteActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => dispatch(licenseWriteActions.write.call(value)), [value]);

  const onCancel = React.useCallback(() => push(`/main/licenses/info/${value.getValue().company_id}/${id}`), [value]);

  const onDelete = React.useCallback(() => push(`${manageLicensePath}/${id}/delete`), [value]);

  return (
    <EditLicenseForm
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={onDelete}
      companies={companies}
    >
      <Switch>
        <DialogRoute
          path={`${manageLicensePath}/:id/delete`}
          component={DeleteLicenseContainer}
          closePath={`${manageLicensePath}/${id}`}
          dialog-title="Delete License Page"
        />
      </Switch>
    </EditLicenseForm>
  );
};

export const editLicenseRoute = <Route path={`${manageLicensePath}/:id`} component={edit} />;

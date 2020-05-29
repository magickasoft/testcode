import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps } from 'react-router-dom';
import { companyDetailsActions } from 'modules/companies/details';
import { CompanyFormModel } from 'modules/companies/edit';
import { appSettingsSelectors, appSettingsListActions } from 'modules/appSettings';
import { licenseDetailsSelector } from './selectors';
import { licenseDetailsActions } from './actions';
import { LicenseDetailsFilterModel } from './models';
import { CompanyLicenseDetails } from './components/CompanyLicenseDetails';
import { LICENSE_DETAILS_PATH } from './constants';

const container = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id, company_id: companyId }
    }
  } = properties;
  const data = useSelector(licenseDetailsSelector.getEntity);
  const licenses = data.details.getValue();
  const companies = data.company.getValue();
  const settings = useSelector(appSettingsSelectors.getValue);

  const loadData = React.useCallback(() => {
    dispatch(licenseDetailsActions.read.call(new LicenseDetailsFilterModel().setValue({ id: +id })));
    dispatch(companyDetailsActions.read.call(new CompanyFormModel().setValue({ id: +companyId })));
  }, [id, companyId]);

  React.useEffect(() => {
    dispatch(appSettingsListActions.read.call());
  }, []);

  React.useEffect(() => loadData(), [id, companyId, loadData]);

  return (
    <CompanyLicenseDetails
      firstAlert={settings.bank_document_first_notification_before_expiration}
      lastAlert={settings.bank_document_last_notification_before_expiration}
      licenseId={+id}
      isPending={data.details.isPending()}
      license={Array.isArray(licenses) && !!licenses.length ? licenses[0] : {}}
      company={Array.isArray(companies) && !!companies.length ? companies[0] : {}}
    />
  );
};

export const companyLicenseDetailsRoute = <Route path={LICENSE_DETAILS_PATH} component={container} />;

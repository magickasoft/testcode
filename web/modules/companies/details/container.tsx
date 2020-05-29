import * as React from 'react';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';
import { DialogRoute } from 'components/Dialog';
import { CompanyInvitationContainer } from 'modules/companies/invite';
import { useSelector, useDispatch } from 'react-redux';
import { licenseListSelectors } from 'modules/licenses/list';
import { appSettingsSelectors, appSettingsListActions } from 'modules/appSettings';
import { forceTableUpdate } from 'modules/tables';
import { COMPANIES_LIST_PATH, companiesListSelectors } from 'modules/companies/list';
import { DeleteLicenseContainer } from 'modules/licenses/edit';
import { COMPANY_DETAILS_PATH } from './constants';
import { CompanyDetails } from './components/CompanyDetails';
import { useCompany } from './hooks';

const container = (properties: RouteComponentProps) => {
  const {
    match: { params }
  } = properties;

  const dispatch = useDispatch();
  const companyId = +params.id;
  const [value, isPending] = useCompany({ id: companyId });
  const allLicenses = useSelector(licenseListSelectors.getValue);
  const companies = useSelector(companiesListSelectors.getEntity);
  const settings = useSelector(appSettingsSelectors.getValue);

  const companyLicenses = React.useMemo(
    () => (Array.isArray(allLicenses) ? allLicenses.filter((i) => +i.company_id === companyId) : []),
    [companyId, allLicenses]
  );

  React.useEffect(() => {
    dispatch(appSettingsListActions.read.call());
  }, []);

  React.useEffect(() => {
    dispatch(forceTableUpdate('alerted-documents', true));
    dispatch(forceTableUpdate('company-accountSigners', true));
    dispatch(forceTableUpdate('company-affiliatedCompanies', true));
    dispatch(forceTableUpdate('company-annualReviews', true));
    dispatch(forceTableUpdate('company-clientPortalUsers', true));
    dispatch(forceTableUpdate('company-contacts', true));
    dispatch(forceTableUpdate('company-customers', true));
    dispatch(forceTableUpdate('company-debtHolders', true));
    dispatch(forceTableUpdate('company-licenses', true));
    dispatch(forceTableUpdate('company-owners', true));
    dispatch(forceTableUpdate('company-vendors', true));
  }, [companyId]);

  return (
    <CompanyDetails
      companies={companies}
      companyId={companyId}
      isPending={isPending}
      value={value}
      licenses={companyLicenses}
      firstAlert={settings.bank_document_first_notification_before_expiration}
      lastAlert={settings.bank_document_last_notification_before_expiration}
    >
      <Switch>
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/invite`}
          component={CompanyInvitationContainer}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title={`Send invite ${value?.name ? 'for' : ''}`}
          dialog-subTitle={value?.name || ''}
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/${companyId}/delete-license/:licenseId`}
          component={DeleteLicenseContainer}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Delete License Page"
        />
      </Switch>
    </CompanyDetails>
  );
};

export const companyDetailsRoute = <Route path={COMPANY_DETAILS_PATH} component={container} />;

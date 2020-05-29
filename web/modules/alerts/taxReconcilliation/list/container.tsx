import * as React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { companiesListSelectors } from 'modules/companies/list';
import { licenseListSelectors } from 'modules/licenses/list';
import { TaxReconcilliationList } from './components/TaxReconcilliationList';
import { TAX_RECONCILLIATION_LIST_PAGE_PATH } from './constants';

export const TaxReconcilliationPageSection = React.memo(() => {
  const companies = useSelector(companiesListSelectors.getEntity);
  const licenses = useSelector(licenseListSelectors.getEntity);
  return <TaxReconcilliationList companies={companies} licenses={licenses} />;
});

export const taxReconcilliationListRoute = (
  <Route path={TAX_RECONCILLIATION_LIST_PAGE_PATH} component={TaxReconcilliationPageSection} />
);

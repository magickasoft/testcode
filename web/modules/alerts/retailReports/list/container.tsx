import * as React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { companiesListSelectors } from 'modules/companies/list';
import { licenseListSelectors } from 'modules/licenses/list';
import { RetailReportsList } from './components/RetailReportsList';
import { RETAIL_REPORTS_LIST_PAGE_PATH } from './constants';

export const RetailReportsPageSection = React.memo(() => {
  const companies = useSelector(companiesListSelectors.getEntity);
  const licenses = useSelector(licenseListSelectors.getEntity);
  return <RetailReportsList companies={companies} licenses={licenses} />;
});

export const retailReportsListRoute = (
  <Route path={RETAIL_REPORTS_LIST_PAGE_PATH} component={RetailReportsPageSection} />
);

import * as React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { companiesListSelectors } from 'modules/companies/list';
import { licenseListSelectors } from 'modules/licenses/list';
import { DocumentsDueList } from './components/DocumentsDueList';
import { DOCUMENTS_DUE_LIST_PAGE_PATH } from './constants';

const container = React.memo(() => {
  const companies = useSelector(companiesListSelectors.getEntity);
  const licenses = useSelector(licenseListSelectors.getEntity);
  return <DocumentsDueList companies={companies} licenses={licenses} />;
});

export const documentsDueListRoute = <Route path={DOCUMENTS_DUE_LIST_PAGE_PATH} component={container} />;

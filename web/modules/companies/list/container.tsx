import * as React from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from 'components/Page';
import { forceTableUpdate } from 'modules/tables';
import { CompaniesList } from './components/CompaniesList';
import { Actions } from './components/CompaniesList/components/Actions';
import { COMPANIES_LIST_PATH } from './constants';

const CompaniesListPage = React.memo(() => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(forceTableUpdate('companies', true));
  }, []);

  return (
    <Page title="All Relationships" actions={<Actions />}>
      <CompaniesList />
    </Page>
  );
});

export const companiesListRoute = <Route path={COMPANIES_LIST_PATH} component={CompaniesListPage} />;

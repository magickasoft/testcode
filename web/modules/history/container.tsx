import * as React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from 'components/Page';
import { licenseListSelectors } from 'modules/licenses/list';
import { forceTableUpdate } from 'modules/tables';
import { EntityHistory } from './components/EntityHistory';
import { HISTORY_LIST_PAGE_PATH } from './constants';
import { filterSettings } from './components/Filter';

const DocumentsListPage = React.memo(() => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(forceTableUpdate('documents', true));
  }, []);

  return (
    <Page title="History">
      <EntityHistory showTypeColumn filter={filterSettings()} />
    </Page>
  );
});

export const historyListRoute = <Route path={HISTORY_LIST_PAGE_PATH} component={DocumentsListPage} />;

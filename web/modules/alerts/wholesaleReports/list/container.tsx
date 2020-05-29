import * as React from 'react';
import { Route } from 'react-router-dom';
import { WholesaleReportsList } from './components/WholesaleReportsList';
import { WHOLESALE_REPORTS_LIST_PAGE_PATH } from './constants';

export const WholesaleReportsPageSection = React.memo(() => <WholesaleReportsList />);

export const wholesaleReportsListRoute = (
  <Route path={WHOLESALE_REPORTS_LIST_PAGE_PATH} component={WholesaleReportsPageSection} />
);

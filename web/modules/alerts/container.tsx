import * as React from 'react';
import { Route } from 'react-router-dom';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { filter } from 'utils/props';
import { PageProps } from 'components/Page/interfaces/PageProps';
import { MAIN_ALERTS_PATH } from 'modules/main';
import { WholesaleReportsPageSection } from './wholesaleReports/list';
import { RetailReportsPageSection } from './retailReports/list';
import { TaxReconcilliationPageSection } from './taxReconcilliation/list';
import { AnnualReviewPageSection } from '../annualReview/list';
import { DocumentsFilesApprovalTable } from './documentsFilesApproval';
import { DocumentsDueSection } from './documentsDue';

export interface AlertsPageProps extends PageProps {
  defaultPageSize?: number;
}

export const AlertsPagePropTypes = {
  ...PagePropTypes
};

export const AlertsPageDefaultProps: AlertsPageProps = {
  ...PageDefaultProps
};

const AlertsPageContainer: React.FunctionComponent = (props: AlertsPageProps) => (
  <Page {...filter(props, PagePropTypes)} title="Alerts">
    <DocumentsDueSection />
    <DocumentsFilesApprovalTable />
    <WholesaleReportsPageSection />
    <RetailReportsPageSection />
    <TaxReconcilliationPageSection />
    <AnnualReviewPageSection />
  </Page>
);

AlertsPageContainer.propTypes = {
  ...AlertsPagePropTypes
};

AlertsPageContainer.defaultProps = {
  ...AlertsPageDefaultProps
};

export const alertsRoute = <Route path={MAIN_ALERTS_PATH} component={AlertsPageContainer} />;

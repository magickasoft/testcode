import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';
import { UserMenuContainer, UserProviderContainer } from 'modules/user';
import { companyLicenseDetailsRoute } from 'modules/licenses/details';
import { documentsDueListRoute } from 'modules/documentsDue/list';
import { alertedDocumentsListRoute } from 'modules/documents/list';
import { documentsDetailsRoute, documentPeriodDetailsRoute } from 'modules/documents/details';
import { addDocumentRoute, editDocumentRoute } from 'modules/documents/edit';
import { addCompanyRoute, editCompanyRoute } from 'modules/companies/edit';
import { companyDetailsRoute } from 'modules/companies/details';
import { companiesListRoute, COMPANIES_LIST_PATH } from 'modules/companies/list';
import { invoiceSubmittalDetailsRoute } from 'modules/invoiceSubmittal/details';
import { addInvoiceSubmittalRoute, editInvoiceSubmittalRoute } from 'modules/invoiceSubmittal/edit';
import { taxReconcilliationAnalyticsRoute } from 'modules/alerts/taxReconcilliation/analytics';
import { addTaxReconcilliationRoute, editTaxReconcilliationRoute } from 'modules/alerts/taxReconcilliation/edit';
import { wholesaleAnalyticsRoute } from 'modules/alerts/wholesaleReports/analytics';
import { addWholesaleRoute, editWholesaleRoute } from 'modules/alerts/wholesaleReports/edit';
import { retailAnalyticsRoute } from 'modules/alerts/retailReports/analytics';
import { addRetailRoute, editRetailRoute } from 'modules/alerts/retailReports/edit';
import { editLicenseRoute } from 'modules/licenses/edit';
import { alertsRoute } from 'modules/alerts';
import { internalTransferAddRoute, internalTransferEditRoute } from 'modules/internalTransfers/edit';
import { historyListRoute } from 'modules/history';
import { internalTransferRoute } from 'modules/internalTransfers/details';
import { internalTransferListRoute } from 'modules/internalTransfers/list';
import { usersListRoute } from 'modules/users/list';
import { appSettingsRoute } from 'modules/appSettings';
import { accountSettingsRoute } from 'modules/accountSettings';
import { annualReviewDetailsRoute } from 'modules/annualReview/details';
import { annualReviewEditRoute } from 'modules/annualReview/edit';
import { Page } from './components/Page';
import { mainBarMinimizedSelector, mainMenuItemsArraySelector } from './selectors';
import { mainToggleBarAction } from './actions';

const PureMainPage = () => {
  const dispatch = useDispatch();
  const barMinimized = useSelector(mainBarMinimizedSelector);
  const menuItems = useSelector(mainMenuItemsArraySelector);
  const onMenuToggle = React.useCallback(() => dispatch(mainToggleBarAction()), []);

  return (
    <UserProviderContainer>
      <Page
        header-children={<UserMenuContainer />}
        bar-minimized={barMinimized}
        menu-items={menuItems}
        bar-onToggle={onMenuToggle}
      >
        <Switch>
          {companyLicenseDetailsRoute}
          {editLicenseRoute}
          {documentsDueListRoute}
          {addDocumentRoute}
          {editDocumentRoute}
          {documentPeriodDetailsRoute}
          {documentsDetailsRoute}
          {alertedDocumentsListRoute}
          {companyDetailsRoute}
          {addWholesaleRoute}
          {editWholesaleRoute}
          {wholesaleAnalyticsRoute}
          {addTaxReconcilliationRoute}
          {editTaxReconcilliationRoute}
          {taxReconcilliationAnalyticsRoute}
          {addInvoiceSubmittalRoute}
          {editInvoiceSubmittalRoute}
          {invoiceSubmittalDetailsRoute}
          {addRetailRoute}
          {editRetailRoute}
          {retailAnalyticsRoute}
          {addCompanyRoute}
          {editCompanyRoute}
          {companiesListRoute}
          {alertsRoute}
          {internalTransferAddRoute}
          {internalTransferEditRoute}
          {internalTransferRoute}
          {internalTransferListRoute}
          {usersListRoute}
          {appSettingsRoute}
          {accountSettingsRoute}
          {annualReviewDetailsRoute}
          {annualReviewEditRoute}
          {historyListRoute}
          <Redirect to={COMPANIES_LIST_PATH} />
        </Switch>
      </Page>
    </UserProviderContainer>
  );
};

export default withRouter(PureMainPage);

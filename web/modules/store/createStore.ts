import { setApiStore } from 'modules/api';
import { appSettingsListSaga, appSettingsSaga } from 'modules/appSettings';
import { accountSettingsSaga } from 'modules/accountSettings';
import { authSaga } from 'modules/auth/sagas';
import { configSaga } from 'modules/config/config-sagas';
import { annualReviewListSaga } from 'modules/annualReview/details/list';
import { annualReviewDetailsSaga } from 'modules/annualReview/details';
import { annualReviewEditSaga } from 'modules/annualReview/edit';
import { documentFileFiltersSaga } from 'modules/documentFileFilters';
import { documentFileListSaga } from 'modules/documentFileList';
import { manageInternalTransferSaga } from 'modules/internalTransfers/edit';
import { internalTransfersExportSaga } from 'modules/internalTransfers/export';
import { internalTransferSaga } from 'modules/internalTransfers/details';
import { editCompanyFormSaga } from 'modules/companies/edit';
import { companiesListSaga } from 'modules/companies/list';
import { companyDeletionSaga } from 'modules/companies/delete';
import { companyDetailsSaga } from 'modules/companies/details';
import { companyInviteSaga } from 'modules/companies/invite';
import { licenseListSaga } from 'modules/licenses/list';
import { licenseDetailsSaga } from 'modules/licenses/details';
import { manageLicenseSaga } from 'modules/licenses/edit';
import { invoiceSubmittalDetailsSaga } from 'modules/invoiceSubmittal/details';
import { invoiceSubmittalDeletionSaga } from 'modules/invoiceSubmittal/delete';
import { editInvoiceSubmittalFormSaga } from 'modules/invoiceSubmittal/edit';
import { taxReconcilliationAnalyticsSaga } from 'modules/alerts/taxReconcilliation/analytics';
import { taxReconcilliationDeletionSaga } from 'modules/alerts/taxReconcilliation/delete';
import { editTaxReconcilliationFormSaga } from 'modules/alerts/taxReconcilliation/edit';
import { wholesaleAnalyticsSaga } from 'modules/alerts/wholesaleReports/analytics';
import { wholesaleDeletionSaga } from 'modules/alerts/wholesaleReports/delete';
import { editWholesaleFormSaga } from 'modules/alerts/wholesaleReports/edit';
import { retailAnalyticsSaga } from 'modules/alerts/retailReports/analytics';
import { retailDeletionSaga } from 'modules/alerts/retailReports/delete';
import { editRetailFormSaga } from 'modules/alerts/retailReports/edit';
import { documentsDueSaga } from 'modules/alerts/documentsDue';
import { userDetailsSaga } from 'modules/users/details';
import { manageUserSaga } from 'modules/users/edit';
import { tablesSaga } from 'modules/tables';
import { documentsDetailsSaga } from 'modules/documents/details';
import { editDocumentSaga } from 'modules/documents/edit';
import { documentsDeletionSaga } from 'modules/documents/delete';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { applicationReducer } from './createReducer';

function devTools() {
  // noinspection JSUnresolvedVariable
  return (window as any)?.__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
    : (f) => f;
}

export const createApplicationStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(devTools());
  }

  const store = createStore(applicationReducer, initialState, compose(applyMiddleware(sagaMiddleware), ...enhancers));

  setApiStore(store);

  sagaMiddleware.run(configSaga);
  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(annualReviewListSaga);
  sagaMiddleware.run(annualReviewDetailsSaga);
  sagaMiddleware.run(annualReviewEditSaga);
  sagaMiddleware.run(documentFileFiltersSaga);
  sagaMiddleware.run(documentFileListSaga);
  sagaMiddleware.run(manageInternalTransferSaga);
  sagaMiddleware.run(internalTransferSaga);
  sagaMiddleware.run(internalTransfersExportSaga);
  sagaMiddleware.run(editCompanyFormSaga);
  sagaMiddleware.run(companyDeletionSaga);
  sagaMiddleware.run(companiesListSaga);
  sagaMiddleware.run(companyDetailsSaga);
  sagaMiddleware.run(invoiceSubmittalDetailsSaga);
  sagaMiddleware.run(invoiceSubmittalDeletionSaga);
  sagaMiddleware.run(editInvoiceSubmittalFormSaga);
  sagaMiddleware.run(taxReconcilliationAnalyticsSaga);
  sagaMiddleware.run(taxReconcilliationDeletionSaga);
  sagaMiddleware.run(editTaxReconcilliationFormSaga);
  sagaMiddleware.run(wholesaleAnalyticsSaga);
  sagaMiddleware.run(wholesaleDeletionSaga);
  sagaMiddleware.run(editWholesaleFormSaga);
  sagaMiddleware.run(retailAnalyticsSaga);
  sagaMiddleware.run(retailDeletionSaga);
  sagaMiddleware.run(editRetailFormSaga);
  sagaMiddleware.run(documentsDueSaga);
  sagaMiddleware.run(companyInviteSaga);
  sagaMiddleware.run(licenseListSaga);
  sagaMiddleware.run(licenseDetailsSaga);
  sagaMiddleware.run(manageLicenseSaga);
  sagaMiddleware.run(userDetailsSaga);
  sagaMiddleware.run(manageUserSaga);
  sagaMiddleware.run(appSettingsListSaga);
  sagaMiddleware.run(appSettingsSaga);
  sagaMiddleware.run(accountSettingsSaga);
  sagaMiddleware.run(tablesSaga);
  sagaMiddleware.run(documentsDetailsSaga);
  sagaMiddleware.run(editDocumentSaga);
  sagaMiddleware.run(documentsDeletionSaga);

  if (module.hot) {
    module.hot.accept('./createReducer', () => store.replaceReducer(applicationReducer));
  }

  return store;
};

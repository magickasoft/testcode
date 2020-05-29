import { getPropByPath } from 'utils';
import { appSettingsId, appSettingsListId, appSettingsListReducer, appSettingsReducer } from 'modules/appSettings';
import { AUTH_STATE } from 'modules/auth/constants';
import { authReducer } from 'modules/auth/reducer';
import { FORGOT_STATE } from 'modules/auth/forgot/constants';
import { NEW_PASSWORD_STATE } from 'modules/auth/newPassword/constants';
import { forgotReducer } from 'modules/auth/forgot/reducer';
import { newPasswordFormReducer } from 'modules/auth/newPassword/reducer';
import { LOGIN_STATE } from 'modules/auth/login/constants';
import { loginReducer } from 'modules/auth/login/reducer';
import { CONFIG_STATE } from 'modules/config/config-constants';
import { configReducer } from 'modules/config/config-reducers';
import { MAIN_STORE_KEY_ID, mainReducer } from 'modules/main';
import { accountSettingsReducer, ACCOUNT_SETTINGS_STATE } from 'modules/accountSettings';
import { annualReviewListId, annualReviewListReducer } from 'modules/annualReview/details/list';
import { documentFileFiltersId, documentFileFiltersReducer } from 'modules/documentFileFilters';
import { documentFileListId, documentFileListReducer } from 'modules/documentFileList';
import { internalTransferActionTypeId, internalTransferReducer } from 'modules/internalTransfers/details/index';
import {
  internalTransferFormId,
  internalTransferDeletionId,
  internalTransferFormReducer,
  internalTransferDeleteReducer
} from 'modules/internalTransfers/edit';
import {
  internalTransfersExportFormId,
  internalTransferExportFormReducer,
  internalTransfersExportDetailsId,
  internalTransferExportDetailsReducer
} from 'modules/internalTransfers/export';
import {
  COMPANY_EDIT_ID,
  CONTACT_EDIT_ID,
  CUSTOMER_EDIT_ID,
  CUSTOMER_DELETION_ID,
  VENDOR_EDIT_ID,
  VENDOR_DELETION_ID,
  AFFILIATED_EDIT_ID,
  AFFILIATED_DELETION_ID,
  companyEditReducer,
  contactEditReducer,
  customerEditReducer,
  customerDeletionReducer,
  vendorEditReducer,
  vendorDeletionReducer,
  affiliatedEditReducer,
  affiliatedDeletionReducer
} from 'modules/companies/edit';
import { COMPANY_DELETION_ID, companyDeletionReducer } from 'modules/companies/delete';
import { COMPANIES_LIST_ID, companiesListReducer } from 'modules/companies/list';
import {
  COMPANY_DETAILS_ID,
  CONTACT_DETAILS_ID,
  CUSTOMER_DETAILS_ID,
  VENDOR_DETAILS_ID,
  AFFILIATED_DETAILS_ID,
  companyDetailsReducer,
  contactDetailsReducer,
  customerDetailsReducer,
  vendorDetailsReducer,
  affiliatedDetailsReducer
} from 'modules/companies/details';
import { COMPANY_INVITE_ID, companyInviteReducer } from 'modules/companies/invite';
import { licenseListId, licenseListReducer } from 'modules/licenses/list';
import { LICENSE_DETAILS_ID, licenseDetailsReducer } from 'modules/licenses/details';
import { licenseFormId, licenseDeletionId, licenseFormReducer, licenseDeleteReducer } from 'modules/licenses/edit';
import { INVOICE_SUBMITTAL_DETAILS_ID, invoiceSubmittalDetailsReducer } from 'modules/invoiceSubmittal/details';
import { INVOICE_SUBMITTAL_DELETION_ID, invoiceSubmittalDeleteReducer } from 'modules/invoiceSubmittal/delete';
import { INVOICE_SUBMITTAL_EDIT_ID, invoiceSubmittalEditReducer } from 'modules/invoiceSubmittal/edit';
import {
  TAX_RECONCILLIATION_ANALYTICS_ID,
  taxReconcilliationAnalyticsReducer
} from 'modules/alerts/taxReconcilliation/analytics';
import {
  TAX_RECONCILLIATION_DELETION_ID,
  taxReconcilliationDeleteReducer
} from 'modules/alerts/taxReconcilliation/delete';
import { TAX_RECONCILLIATION_EDIT_ID, taxReconcilliationEditReducer } from 'modules/alerts/taxReconcilliation/edit';
import { WHOLESALE_ANALYTICS_ID, wholesaleAnalyticsReducer } from 'modules/alerts/wholesaleReports/analytics';
import { WHOLESALE_DELETION_ID, wholesaleDeleteReducer } from 'modules/alerts/wholesaleReports/delete';
import { WHOLESALE_EDIT_ID, wholesaleEditReducer } from 'modules/alerts/wholesaleReports/edit';
import { RETAIL_ANALYTICS_ID, retailAnalyticsReducer } from 'modules/alerts/retailReports/analytics';
import { RETAIL_DELETION_ID, retailDeleteReducer } from 'modules/alerts/retailReports/delete';
import { RETAIL_EDIT_ID, retailEditReducer } from 'modules/alerts/retailReports/edit';
import { DOCUMENTS_DUE_KEY, documentsDueReducer } from 'modules/alerts/documentsDue';
import { tablesReducer, TABLES_STORE_ID } from 'modules/tables';
import {
  DOCUMENTS_DETAILS_ID,
  DOCUMENT_PERIODS_ID,
  DOCUMENT_FILE_DETAILS_ID,
  documentsDetailsReducer,
  documentPeriodsReducer,
  documentFileDetailsReducer
} from 'modules/documents/details';
import {
  documentPeriodFormId,
  documentFileFormId,
  documentPeriodFormReducer,
  documentFileFormReducer,
  documentFormId,
  documentFormReducer
} from 'modules/documents/edit';
import {
  DOCUMENTS_FILE_DELETE_ID,
  DOCUMENTS_PERIOD_DELETE_ID,
  documentsFileDeleteReducer,
  documentPeriodDeleteReducer,
  DOCUMENT_DELETE_ID,
  documentDeleteReducer
} from 'modules/documents/delete';
import {
  ANNUAL_REVIEW_DETAILS_ID,
  ANNUAL_REVIEW_SALES_DEPOSITS_ID,
  annualReviewDetailsReducer,
  annualReviewSalesDepositsReducer
} from 'modules/annualReview/details';
import { USER_DETAILS_ID, userDetailsReducer } from 'modules/users/details';
import { userFormId, userFormReducer, userResetAccessFormId, userResetAccessFormReducer } from 'modules/users/edit';
import {
  annualReviewFormReducer,
  annualReviewDeleteReducer,
  annualReviewFormId,
  annualReviewDeletionId
} from 'modules/annualReview/edit';

const reducersCollection = {
  [ACCOUNT_SETTINGS_STATE]: accountSettingsReducer,
  [CONFIG_STATE]: configReducer,
  [AUTH_STATE]: authReducer,
  [LOGIN_STATE]: loginReducer,
  [FORGOT_STATE]: forgotReducer,
  [NEW_PASSWORD_STATE]: newPasswordFormReducer,
  [MAIN_STORE_KEY_ID]: mainReducer,
  [COMPANY_EDIT_ID]: companyEditReducer,
  [CONTACT_EDIT_ID]: contactEditReducer,
  [CUSTOMER_EDIT_ID]: customerEditReducer,
  [CUSTOMER_DELETION_ID]: customerDeletionReducer,
  [VENDOR_EDIT_ID]: vendorEditReducer,
  [VENDOR_DELETION_ID]: vendorDeletionReducer,
  [AFFILIATED_EDIT_ID]: affiliatedEditReducer,
  [AFFILIATED_DELETION_ID]: affiliatedDeletionReducer,
  [COMPANY_DELETION_ID]: companyDeletionReducer,
  [COMPANY_DETAILS_ID]: companyDetailsReducer,
  [COMPANIES_LIST_ID]: companiesListReducer,
  [CONTACT_DETAILS_ID]: contactDetailsReducer,
  [CUSTOMER_DETAILS_ID]: customerDetailsReducer,
  [VENDOR_DETAILS_ID]: vendorDetailsReducer,
  [AFFILIATED_DETAILS_ID]: affiliatedDetailsReducer,
  [INVOICE_SUBMITTAL_DETAILS_ID]: invoiceSubmittalDetailsReducer,
  [INVOICE_SUBMITTAL_DELETION_ID]: invoiceSubmittalDeleteReducer,
  [INVOICE_SUBMITTAL_EDIT_ID]: invoiceSubmittalEditReducer,
  [TAX_RECONCILLIATION_ANALYTICS_ID]: taxReconcilliationAnalyticsReducer,
  [TAX_RECONCILLIATION_DELETION_ID]: taxReconcilliationDeleteReducer,
  [TAX_RECONCILLIATION_EDIT_ID]: taxReconcilliationEditReducer,
  [WHOLESALE_ANALYTICS_ID]: wholesaleAnalyticsReducer,
  [WHOLESALE_DELETION_ID]: wholesaleDeleteReducer,
  [WHOLESALE_EDIT_ID]: wholesaleEditReducer,
  [RETAIL_ANALYTICS_ID]: retailAnalyticsReducer,
  [RETAIL_DELETION_ID]: retailDeleteReducer,
  [RETAIL_EDIT_ID]: retailEditReducer,
  [DOCUMENTS_DUE_KEY]: documentsDueReducer,
  [COMPANY_INVITE_ID]: companyInviteReducer,
  [LICENSE_DETAILS_ID]: licenseDetailsReducer,
  [licenseFormId]: licenseFormReducer,
  [licenseDeletionId]: licenseDeleteReducer,
  [licenseListId]: licenseListReducer,
  [MAIN_STORE_KEY_ID]: mainReducer,
  [appSettingsListId]: appSettingsListReducer,
  [appSettingsId]: appSettingsReducer,
  [internalTransferActionTypeId]: internalTransferReducer,
  [internalTransferFormId]: internalTransferFormReducer,
  [internalTransferDeletionId]: internalTransferDeleteReducer,
  [documentFileFiltersId]: documentFileFiltersReducer,
  [documentFileListId]: documentFileListReducer,
  [annualReviewListId]: annualReviewListReducer,
  [ANNUAL_REVIEW_DETAILS_ID]: annualReviewDetailsReducer,
  [ANNUAL_REVIEW_SALES_DEPOSITS_ID]: annualReviewSalesDepositsReducer,
  [annualReviewFormId]: annualReviewFormReducer,
  [annualReviewDeletionId]: annualReviewDeleteReducer,
  [TABLES_STORE_ID]: tablesReducer,
  [DOCUMENTS_DETAILS_ID]: documentsDetailsReducer,
  [DOCUMENT_FILE_DETAILS_ID]: documentFileDetailsReducer,
  [DOCUMENT_PERIODS_ID]: documentPeriodsReducer,
  [documentPeriodFormId]: documentPeriodFormReducer,
  [documentFileFormId]: documentFileFormReducer,
  [documentFormId]: documentFormReducer,
  [DOCUMENTS_FILE_DELETE_ID]: documentsFileDeleteReducer,
  [DOCUMENTS_PERIOD_DELETE_ID]: documentPeriodDeleteReducer,
  [DOCUMENT_DELETE_ID]: documentDeleteReducer,
  [USER_DETAILS_ID]: userDetailsReducer,
  [userFormId]: userFormReducer,
  [userResetAccessFormId]: userResetAccessFormReducer,
  [internalTransfersExportFormId]: internalTransferExportFormReducer,
  [internalTransfersExportDetailsId]: internalTransferExportDetailsReducer
};

export const applicationReducer = (state, action) => {
  if (!action || !action.type) {
    return state;
  }

  return Object.keys(reducersCollection).reduce((accumulatedReducerShape, currentKey) => {
    const pathParts = currentKey.split('.');
    const copy = { ...accumulatedReducerShape };
    let pointer = copy;

    for (let i = 0; i < pathParts.length; i += 1) {
      if (!pointer[pathParts[i]]) {
        pointer[pathParts[i]] =
          i < pathParts.length - 1 ? {} : reducersCollection[currentKey](getPropByPath(state, currentKey), action);
      }
      pointer = pointer[pathParts[i]];
    }

    return copy;
  }, {});
};

import * as React from 'react';
import { Page } from 'components/Page';
import { Link } from 'components/Link';
import { Delimiter } from 'components/Delimiter';
import { AuthButton } from 'components/Auth/AuthButton';
import { manageLicensePath } from 'modules/licenses/edit';
import { filter } from 'utils/props';
import { AlertedDocumentsList, DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { EntityHistory, HistoryEntityType } from 'modules/history';
import { LicenseInformation, LicenseInformationPropTypes } from './components/LicenseInformation';
import { RetailReports } from './components/RetailReports';
import { TaxReconciliations } from './components/TaxReconciliations';
import { InternalTransfers } from './components/InternalTransfers';
import { InvoiceSubmittal } from './components/InvoiceSubmittal';

interface Properties {
  licenseId: number;
  license: any;
  company: any;
  isPending: boolean;
  children?: React.ReactNode;
  firstAlert: number;
  lastAlert: number;
}

const companyLicenseDetails = (properties: Properties) => {
  const { children, license, licenseId, isPending, firstAlert, lastAlert } = properties;

  const renderActions = React.useCallback(
    () => (
      <Link to={`${manageLicensePath}/${licenseId}`} face={Link.FACE_DEFAULT}>
        <AuthButton>Clone</AuthButton>
      </Link>
    ),
    [licenseId]
  );

  return (
    <Page
      isPending={isPending}
      title="License Page"
      face={Page.FACE_SECONDARY}
      subTitle={license?.name}
      actions={renderActions()}
    >
      <LicenseInformation {...filter(properties, LicenseInformationPropTypes)} />
      <RetailReports licenseId={licenseId} />
      <TaxReconciliations licenseId={licenseId} />
      <InternalTransfers licenseId={licenseId} />
      <InvoiceSubmittal licenseId={licenseId} />
      <AlertedDocumentsList
        firstAlert={firstAlert}
        lastAlert={lastAlert}
        initialFilter={{ license_id: licenseId }}
        sectionProperties={{
          title: 'Documents',
          actions: (
            <Link rounded button to={`${DOCUMENTS_LIST_PAGE_PATH}/add?licenseId=${licenseId}`} face={Link.FACE_DEFAULT}>
              ADD NEW
            </Link>
          )
        }}
      />
      <Delimiter />
      {licenseId && (
        <EntityHistory
          id={licenseId}
          type={HistoryEntityType.License}
          sectionProperties={{ title: 'License History' }}
        />
      )}
      {children}
    </Page>
  );
};

export { companyLicenseDetails as CompanyLicenseDetails };

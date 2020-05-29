import * as React from 'react';
import { generatePath } from 'react-router';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { Link } from 'components/Link';
import { AuthButton } from 'components/Auth/AuthButton';
import { Delimiter } from 'components/Delimiter';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { DOCUMENTS_LIST_PAGE_PATH, AlertedDocumentsList } from 'modules/documents/list';
import { modelCompany } from 'types/foundation';
import { EntityHistory, HistoryEntityType } from 'modules/history';
import { ListModel } from 'utils/list';
import { CompanyInformation } from './components/CompanyInformation';
import { LicensesTable } from './components/LicensesTable';
import { AnnualReviewsTable } from './components/AnnualReviewsTable';
import { VendorsTable } from './components/VendorsTable';
import { CustomersTable } from './components/CustomersTable';
import { AffiliatedCompaniesTable } from './components/AffiliatedCompaniesTable';
import { ContactsTable } from './components/ContactsTable';
import { OwnersTable } from './components/OwnersTable';
import { DebtHoldersTable } from './components/DebtHoldersTable';
import { AccountSignersTable } from './components/AccountSignersTable';

interface Properties extends ReturnType<typeof PagePropTypes> {
  companyId: number;
  licenses: any[];
  companies: ListModel;
  value?: modelCompany;
  firstAlert: number;
  lastAlert: number;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: 'Company Profile',
  face: Page.FACE_SECONDARY,
  companyId: undefined,
  value: null,
  licenses: []
};

export const CompanyDetails = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { value, licenses, companies, children, companyId, firstAlert, lastAlert, ...rest } = extendedProperties;

  const renderActions = React.useCallback(
    () => (
      <Link to={generatePath(`${COMPANIES_LIST_PATH}/detail/:id/invite`, { id: companyId })} face={Link.FACE_DEFAULT}>
        <AuthButton>Client Portal Invite</AuthButton>
      </Link>
    ),
    [companyId]
  );

  return (
    <Page {...rest} subTitle={value?.name} actions={renderActions()}>
      <CompanyInformation companies={companies} value={value} licenses={licenses} />
      <AlertedDocumentsList
        firstAlert={firstAlert}
        lastAlert={lastAlert}
        initialFilter={{ company_id: companyId }}
        sectionProperties={{
          title: 'Documents',
          actions: (
            <Link rounded button to={`${DOCUMENTS_LIST_PAGE_PATH}/add?companyId=${companyId}`} face={Link.FACE_DEFAULT}>
              ADD NEW
            </Link>
          )
        }}
      />
      <ContactsTable companyId={companyId} />
      <OwnersTable companyId={companyId} />
      <DebtHoldersTable companyId={companyId} />
      <AccountSignersTable companyId={companyId} />
      <AffiliatedCompaniesTable companyId={companyId} />
      <LicensesTable companyId={companyId} />
      <CustomersTable companyId={companyId} />
      <VendorsTable companyId={companyId} />
      <AnnualReviewsTable companyId={companyId} />
      {companyId && (
        <EntityHistory
          id={companyId}
          type={HistoryEntityType.Company}
          sectionProperties={{ title: 'Company History' }}
        />
      )}
      {children}
    </Page>
  );
});

/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { DateTime } from 'components/DateTime';
import { Delimiter } from 'components/Delimiter';
import { Info, InfoSet } from 'components/Info';
import { CustomerStatusLabel } from 'components/Labels';
import { Icon } from 'components/Icon';
import { Link } from 'components/Link';
import { filter } from 'utils/props';
import { ListModel } from 'utils/list';

import styles from './styles.module.css';

interface Properties extends ReturnType<typeof PageSectionPropTypes> {
  value: any;
  licenses: any[];
  companies: ListModel;
}

const defaultProperties = {
  ...PageSectionDefaultProps,
  title: 'Company Information',
  face: PageSection.FACE_SECONDARY
};

const companyInformation = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { value, licenses, companies } = extendedProperties;
  const plainCompanies = companies.getValue();
  const holder = (Array.isArray(plainCompanies) ? plainCompanies : []).find((i) => +i.id === +value?.holding_id);

  const renderRelationshipDetail = React.useCallback(
    () => (
      <>
        <Delimiter />
        <InfoSet direction={InfoSet.DIRECTION_ROW} legend="Relationship Detail">
          <div className={styles.column}>
            <Info label="Account Name">{value?.name || '---'}</Info>
            <Info label="Entity Legal Name">{value?.legal_name || '---'}</Info>
            <Info label="DBA">{value?.dba || '---'}</Info>
            <Info label="Is Holding">
              <Icon
                face={value?.is_holding ? Icon.FACE_ACTIVE : Icon.FACE_DEFAULT}
                size={Icon.SIZE_SMALL}
                type="check"
              />
            </Info>
            <Info label="Holding">{holder?.name || '---'}</Info>
            <Info label="Customer Status">
              <CustomerStatusLabel name={value?.customer_status} />
            </Info>
          </div>
          <div className={styles.column}>
            <Info label="Active">
              <Icon face={value?.status ? Icon.FACE_ACTIVE : Icon.FACE_DEFAULT} size={Icon.SIZE_SMALL} type="check" />
            </Info>
            <Info label="Phone">{value?.phone || '---'}</Info>
            <Info label="Website">{value?.website || '---'}</Info>
          </div>
        </InfoSet>
        <Delimiter />
      </>
    ),
    [value]
  );

  const renderDescription = React.useCallback(
    () => (
      <InfoSet direction={InfoSet.DIRECTION_ROW} legend="Description">
        {value?.description || ''}
      </InfoSet>
    ),
    [value]
  );

  const renderAccountDetails = React.useCallback(
    () => (
      <>
        <Delimiter />
        <InfoSet direction={InfoSet.DIRECTION_ROW} legend="Account Details">
          <div className={styles.column}>
            <Info label="Business Type">{value?.business_type || '---'}</Info>
            <Info label="Entity Type">{value?.entity_type || '---'}</Info>
            <Info label="State of Incorporation or Organization">{value?.state}</Info>
          </div>
          <div className={styles.column}>
            <Info label="Primary Account Opening Date">
              {value?.dateFounded ? <DateTime utc={value.dateFounded} dateFormat="YYYY/M/D" /> : '---'}
            </Info>
            <Info label="EIN #">{value?.ein || '---'}</Info>
            <Info label="Number of Licenses">{licenses.length}</Info>
            {/* <Info label="Bank Accounts">5</Info> */}
          </div>
        </InfoSet>
        <Delimiter />
      </>
    ),
    [value, licenses]
  );

  const renderActions = React.useCallback(
    () => (
      <Link button to={`${COMPANIES_LIST_PATH}/edit/${value?.id}`} face={Link.FACE_SECONDARY}>
        Edit
      </Link>
    ),
    [value]
  );

  return (
    <PageSection {...filter(extendedProperties, PageSectionPropTypes)} actions={renderActions()}>
      {renderRelationshipDetail()}
      {renderDescription()}
      {renderAccountDetails()}
      <InfoSet direction={InfoSet.DIRECTION_ROW} legend="Address Information">
        <Info label="Billing Address">
          {[value?.street, value?.city, value?.state, value?.postal_code, value?.country]
            .filter((i) => !!i)
            .join(', ') || '---'}
        </Info>
      </InfoSet>
    </PageSection>
  );
});

export { companyInformation as CompanyInformation };

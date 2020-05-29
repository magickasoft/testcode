/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { MAIN_PATH } from 'modules/main';
import { Delimiter } from 'components/Delimiter';
import { Info, InfoSet } from 'components/Info';
import { DateTime } from 'components/DateTime';
import { Link } from 'components/Link';
import { filter } from 'utils/props';
import { addPrefix } from 'utils/common';

import styles from './styles.module.css';

interface Properties extends ReturnType<typeof PageSectionPropTypes> {
  value: any;
  license: any;
  company: any;
}

const defaultProperties = {
  ...PageSectionDefaultProps,
  title: 'Invoice Submittal Detail',
  face: PageSection.FACE_SECONDARY
};

const InvoiceSubmittalInformation = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { value, license, company } = extendedProperties;
  const renderGeneral = React.useCallback(
    () => (
      <>
        <Delimiter />
        <InfoSet direction={InfoSet.DIRECTION_ROW} legend="General">
          <div className={styles.column}>
            <Info label="Invoice Name">{addPrefix('IS')(value?.id || '--')}</Info>
            <Info label="Amount">{value?.amount ? `$ ${value.amount}` : '---'}</Info>
            <Info label="Created At">{value?.date && <DateTime utc={value?.date} dateFormat="YYYY/MM/DD" />}</Info>
            <Info label="Manifest Number (If Applicable)">{value?.manifest_number || '---'}</Info>
            <Info label="Notes">{value?.notes || '---'}</Info>
          </div>

          <div className={styles.column}>
            <Info label="License">{license?.name || '---'}</Info>
            <Info label="Date">{value?.date && <DateTime utc={value?.date} dateFormat="YYYY/MM/DD" />}</Info>
            <Info label="Last Modified At">
              {value?.date && <DateTime utc={value?.date} dateFormat="YYYY/MM/DD" />}
            </Info>
          </div>
        </InfoSet>
      </>
    ),
    [value, license, company]
  );

  const renderActions = React.useCallback(
    () => (
      <Link button to={`${MAIN_PATH}/invoiceSubmittal/edit/${value?.id}`} face={Link.FACE_SECONDARY}>
        Edit
      </Link>
    ),
    [value]
  );

  return (
    <PageSection {...filter(extendedProperties, PageSectionPropTypes)} actions={renderActions()}>
      {renderGeneral()}
    </PageSection>
  );
});

export { InvoiceSubmittalInformation };

/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { MAIN_PATH } from 'modules/main';
import { Delimiter } from 'components/Delimiter';
import { Info, InfoSet } from 'components/Info';
import { StatusLabel } from 'components/Labels';
import { DateTime } from 'components/DateTime';
import { Link } from 'components/Link';
import { filter } from 'utils/props';

import styles from './styles.module.css';

interface Properties extends ReturnType<typeof PageSectionPropTypes> {
  value: any;
  license: any;
  company: any;
}

const defaultProperties = {
  ...PageSectionDefaultProps,
  title: 'Information',
  face: PageSection.FACE_SECONDARY
};

const WholesaleInformation = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { value, license, company } = extendedProperties;
  const isQuarterly = value?.quarterly || false;

  const renderGeneral = React.useCallback(
    () => (
      <>
        <Delimiter />
        <InfoSet direction={InfoSet.DIRECTION_ROW} legend="General">
          <div className={styles.column}>
            <Info label="License Number">{license?.license_number || '---'}</Info>
            <Info label="Customer Name">{company?.name || '---'}</Info>
            <Info label="Report Status">
              <StatusLabel name={value?.status} />
            </Info>
          </div>

          <div className={styles.column}>
            <Info label="License Type">{license?.type || '---'}</Info>
            <Info label={isQuarterly ? 'Quarter' : 'Month'}>
              {value?.start_date && (
                <DateTime utc={value?.start_date} timeFormat="" dateFormat={isQuarterly ? '[Q]Q-YYYY' : 'MMM-YYYY'} />
              )}
            </Info>
          </div>
        </InfoSet>
      </>
    ),
    [value, license, company]
  );

  const renderActions = React.useCallback(
    () => (
      <Link button to={`${MAIN_PATH}/wholesale/edit/${value?.id}`} face={Link.FACE_SECONDARY}>
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

export { WholesaleInformation };

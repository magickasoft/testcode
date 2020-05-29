/* eslint-disable camelcase */

import * as React from 'react';
import moment from 'moment';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { PageSection } from 'components/Page';
import { Info } from 'components/Info';
import { Link } from 'components/Link';
import { Delimiter } from 'components/Delimiter';
import { FrequencyLabel, StartDateTypeLabel } from 'components/Labels';
import { Chip, ChipFaces } from 'components/Chip';
import { CheckBox } from 'components/CheckBox';
import { Button } from 'components/Button';

import * as styles from './styles.module.css';

interface Properties {
  document: any;
  company: any;
  license: any;
  period: any;
}

export const Information = React.memo((properties: Properties) => {
  const { document, company, license, period } = properties;

  const renderActions = React.useCallback(
    () => (
      <>
        <Link button to={`${DOCUMENTS_LIST_PAGE_PATH}/${document?.id}/edit`} face={Link.FACE_SECONDARY}>
          Edit
        </Link>
        {document.frequency === 'one-time' && period?.status === 'new' && (
          <Link
            button
            className={styles.approveButton}
            face={Button.FACE_PRIMARY}
            to={`${DOCUMENTS_LIST_PAGE_PATH}/${document.id}/approve-period`}
          >
            Approve
          </Link>
        )}
      </>
    ),
    [document, period]
  );

  return (
    <PageSection face={PageSection.FACE_SECONDARY} title="Document Information" actions={renderActions()}>
      <Delimiter />
      <div className={styles.columns}>
        <div className={styles.column}>
          <Info label="Document Name">{document?.name || '---'}</Info>
          <Info label="Relationship">{document?.company_id && company ? company.name : '---'}</Info>
          <Info label="Frequency">
            <FrequencyLabel name={document?.frequency || '---'} />
          </Info>
          <Info label="Expiration Delay Days">{document?.expiration_delay_days?.toString() || '---'}</Info>
        </div>
        <div className={styles.column}>
          <Info label="Internal">
            <CheckBox rounded value={document?.internal} />
          </Info>
          <Info label="License Name">{document?.license_id && license ? license.name : '---'}</Info>
          {document?.frequency === 'one-time' ? (
            <Info label="Status">
              <Chip face={period?.status === 'new' ? ChipFaces.Primary : ChipFaces.Default}>{period?.status}</Chip>
            </Info>
          ) : (
            <Info label="StartDate Type">
              <StartDateTypeLabel name={document?.start_date_type} />
            </Info>
          )}
          <Info label="Last Modified Date">{moment(document?.updated_at).format('MM/DD/YYYY HH:mm') || '---'}</Info>
        </div>
      </div>
      <Info label="Notes (visible for staff)">{period?.notes || '---'}</Info>
      <Delimiter />
    </PageSection>
  );
});

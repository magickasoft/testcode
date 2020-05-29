/* eslint-disable camelcase */

import * as React from 'react';
import moment from 'moment';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { PageSection } from 'components/Page';
import { Info } from 'components/Info';
import { Link } from 'components/Link';
import { Delimiter } from 'components/Delimiter';
import { Chip, ChipFaces } from 'components/Chip';
import { Button } from 'components/Button';

import styles from './styles.module.css';

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
        <Link
          button
          to={`${DOCUMENTS_LIST_PAGE_PATH}/${document?.id}/period/${period?.id}/edit`}
          face={Link.FACE_SECONDARY}
        >
          Edit
        </Link>
        {period?.status === 'new' && (
          <Link
            button
            className={styles.approveButton}
            face={Button.FACE_PRIMARY}
            to={`${DOCUMENTS_LIST_PAGE_PATH}/${document?.id}/period/${period?.id}/approve`}
          >
            Approve
          </Link>
        )}
      </>
    ),
    [document, period]
  );

  return (
    <PageSection face={PageSection.FACE_SECONDARY} title="Period Information" actions={renderActions()}>
      <Delimiter />
      <div className={styles.columns}>
        <div className={styles.column}>
          <Info label="Document Name">{document?.name || '---'}</Info>
          <Info label="Relationship">{document?.company_id && company ? company.name : '---'}</Info>
          <Info label="Start Date">{moment(period?.start_date).format('MM/DD/YYYY') || '---'}</Info>
          <Info label="Status">
            <Chip face={period?.status === 'new' ? ChipFaces.Primary : ChipFaces.Default}>{period?.status}</Chip>
          </Info>
        </div>
        <div className={styles.column}>
          <Info className={styles.licenseName} label="License Name">
            {document?.license_id && license ? license.name : '---'}
          </Info>
          <Info label="End Date">{moment(period?.end_date).format('MM/DD/YYYY') || '---'}</Info>
          <Info label="Last Modified Date">{moment(document?.updated_at).format('MM/DD/YYYY HH:mm') || '---'}</Info>
        </div>
      </div>
      <Info label="Notes (visible for staff)">{period?.notes || '---'}</Info>
      <Delimiter />
    </PageSection>
  );
});

/* eslint-disable camelcase */
import * as React from 'react';
import { Info, InfoSet, InfoColumn } from 'components/Info/index';
import { AnnualReviewStatusLabel } from 'components/Labels';
import { HeadingTitle } from 'components/HeadingTitle/HeadingTitle';
import { dateFormat } from 'utils/moment';
import { modelAnnualReview, modelCompany } from 'types/foundation';
import { FieldDate } from '../FieldDate/FieldDate';

import styles from './annualReviewEditOverview.module.css';

const toDate = (date) => (date ? dateFormat(date) : '--');

export interface AnnualReviewEditOverviewProps {
  annualReview: modelAnnualReview;
  company: modelCompany;
  Field: any;
}

export const AnnualReviewEditOverview = ({ annualReview, company, Field }: AnnualReviewEditOverviewProps) => (
  <div className={styles.container}>
    <HeadingTitle size={HeadingTitle.SIZE_LARGE}>Overview</HeadingTitle>
    <InfoSet direction={InfoSet.DIRECTION_ROW}>
      <InfoColumn>
        <Info label="Relationship Name">{company?.name || '---'}</Info>
        <Info label="Licensed Entity Legal Name">{company?.legal_name || '---'}</Info>
        <Info label="Date of Initial Approval">{toDate(annualReview?.created_at)}</Info>
        <Info label="Status">
          <AnnualReviewStatusLabel
            name={annualReview?.status}
            created={Date.parse(annualReview?.created_at)}
            updated={Date.parse(annualReview?.updated_at)}
          />
        </Info>
      </InfoColumn>

      <InfoColumn>
        <Info label="TT CO.">--</Info>
        <Info label="Related Companies">--</Info>
        <Info label="Date of Last Annual Review">
          <FieldDate Field={Field} name="last_ar_date" />
        </Info>
        <Info label="Financials End Date">
          <FieldDate Field={Field} name="last_ar_date" />
        </Info>
      </InfoColumn>
    </InfoSet>
  </div>
);

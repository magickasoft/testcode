/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection } from 'components/Page';
import { Info, InfoSet, InfoColumn } from 'components/Info/index';
import { AnnualReviewStatusLabel } from 'components/Labels';
import { HeadingTitle } from 'components/HeadingTitle/HeadingTitle';
import { modelAnnualReview, modelCompany } from 'types/foundation';
import { dateFormat } from 'utils/moment';
import { AnnualReviewActions } from '../AnnualReviewActions';

export interface AnnualReviewDetailsInfoProps {
  company: modelCompany;
  annualReview: modelAnnualReview;
  editUrl: string;
}

const toDate = (date) => (date ? dateFormat(date) : '--');
const isStart = (annualReview) => annualReview?.created_at === annualReview?.updated_at;

export const AnnualReviewInfo: React.FC<AnnualReviewDetailsInfoProps> = ({
  company,
  annualReview,
  editUrl
}: AnnualReviewDetailsInfoProps) => (
  <PageSection
    title="Annual Review"
    face={PageSection.FACE_THIRD}
    first
    actions={<AnnualReviewActions isStart={isStart(annualReview)} editUrl={editUrl} />}
  >
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
        <Info label="Date of Last Annual Review">{toDate(annualReview?.last_ar_date)}</Info>
      </InfoColumn>
    </InfoSet>
  </PageSection>
);

import * as React from 'react';
import { Page } from 'components/Page';
import { Button } from 'components/Button';
import { addPrefix } from 'utils/common';
import { modelAnnualReview } from 'types/foundation';

interface AnnualReviewDetailsProps {
  annualReviewId: number;
  isPending: boolean;
  children?: React.ReactNode;
}

export const AnnualReviewDetails = (props: AnnualReviewDetailsProps) => {
  const { children, annualReviewId, isPending } = props;

  const renderActions = () => (
    <Button rounded face={Button.FACE_PRIMARY}>
      Generate PDF
    </Button>
  );

  return (
    <Page
      isPending={isPending}
      title="MRB Annual Relationship Review"
      face={Page.FACE_SECONDARY}
      subTitle={addPrefix('AR')(annualReviewId)}
      actions={renderActions()}
    >
      {children}
    </Page>
  );
};

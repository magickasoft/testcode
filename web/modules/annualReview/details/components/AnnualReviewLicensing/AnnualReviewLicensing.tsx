/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection } from 'components/Page';
import { AnnualReviewLicensingTable } from 'modules/annualReview/details';
import { AnnualReviewLicensingQuestions } from 'modules/annualReview/components';
import { annualReviewQuestionarieData } from '../../../selectors/annualReviewQuestionnaire';

export interface AnnualReviewLicensingProps {
  companyId: number;
  questionnaire: string;
}

export const AnnualReviewLicensing = ({ companyId, questionnaire }: AnnualReviewLicensingProps) => {
  /**
   licensing_name_prior: any;
   licensing_name_changes_mmcc: any;
   licensing_name_changes: any;
   licensing_loc_changes_mmcc: any;
   licensing_loc_changes: any;
   */
  const qData = annualReviewQuestionarieData(questionnaire);
  const hasAnswers =
    qData?.licensing_loc_changes &&
    qData?.licensing_loc_changes_mmcc &&
    qData?.licensing_name_changes &&
    qData?.licensing_name_changes_mmcc;

  return (
    <PageSection title="Licensing">
      <AnnualReviewLicensingTable companyId={companyId} />
      {hasAnswers && (
        <AnnualReviewLicensingQuestions
          licensingLocChanges={qData?.licensing_loc_changes}
          licensingNameChanges={qData?.licensing_name_changes}
          licensingLocChangesMmcc={qData?.licensing_loc_changes_mmcc}
          licensingNameChangesMmcc={qData?.licensing_name_changes_mmcc}
        />
      )}
    </PageSection>
  );
};

import * as React from 'react';
import { InputText } from 'components/Input';
import { AnnualReviewLicensingTable } from 'modules/annualReview/details';
import { AnnualReviewLicensingQuestions } from 'modules/annualReview/components';
import { PageSection } from 'components/Page';
// import { AnnualReviewFormModel } from "modules/annualReview/edit";
import { FieldYesNo } from '../FieldYesNo/FieldYesNo';

export interface AnnualReviewEditLicensingProps {
  companyId: number;
  Field: any;
}

export const AnnualReviewEditLicensing = ({ companyId, Field }: AnnualReviewEditLicensingProps) => (
  <PageSection title="Licensing">
    <AnnualReviewLicensingTable companyId={companyId} />
    <AnnualReviewLicensingQuestions
      licensingNamePrior={<Field name="questionnaire.licensing_name_prior" input={InputText} />}
      licensingLocChanges={<FieldYesNo name="questionnaire.licensing_loc_changes" Field={Field} />}
      licensingNameChanges={<FieldYesNo name="questionnaire.licensing_name_changes" Field={Field} />}
      licensingLocChangesMmcc={<FieldYesNo name="questionnaire.licensing_loc_changes_mmcc" Field={Field} />}
      licensingNameChangesMmcc={<FieldYesNo name="questionnaire.licensing_name_changes_mmcc" Field={Field} />}
    />
  </PageSection>
);

import * as React from 'react';

import { AnnualReviewQuestion } from '../AnnualReviewQuestions/AnnualReviewQuestion';
import { AnnualReviewQuestionColumn } from '../AnnualReviewQuestions/AnnualReviewQuestion/AnnualReviewQuestionColumn';
import { AnnualReviewQuestionsSet } from '../AnnualReviewQuestions/AnnualReviewQuestion/AnnualReviewQuestionsSet';

import styles from './annualReviewLicensingQuestions.module.css';

export interface AnnualReviewLicensingQuestionsProps {
  licensingNamePrior?: React.ReactNode;
  licensingLocChanges?: React.ReactNode;
  licensingNameChanges?: React.ReactNode;
  licensingLocChangesMmcc?: React.ReactNode;
  licensingNameChangesMmcc?: React.ReactNode;
}

export const AnnualReviewLicensingQuestions = ({
  licensingNamePrior,
  licensingLocChanges,
  licensingNameChanges,
  licensingLocChangesMmcc,
  licensingNameChangesMmcc
}: AnnualReviewLicensingQuestionsProps) => (
  <div className={styles.questions}>
    <AnnualReviewQuestionsSet>
      <AnnualReviewQuestionColumn>
        <AnnualReviewQuestion label="Any location changes in the last year?">
          {licensingLocChanges}
        </AnnualReviewQuestion>
        <AnnualReviewQuestion label="Any name changes in the last year?">{licensingNameChanges}</AnnualReviewQuestion>
        {licensingNamePrior && <AnnualReviewQuestion label="Prior Name:">{licensingNamePrior}</AnnualReviewQuestion>}
      </AnnualReviewQuestionColumn>
      <AnnualReviewQuestionColumn>
        <AnnualReviewQuestion label="If yes, approved by MMCC?">{licensingLocChangesMmcc}</AnnualReviewQuestion>
        <AnnualReviewQuestion label="If yes, approved by MMCC?">{licensingNameChangesMmcc}</AnnualReviewQuestion>
      </AnnualReviewQuestionColumn>
    </AnnualReviewQuestionsSet>
  </div>
);

import * as React from 'react';
import { PageSection } from 'components/Page';
import { AnnualReviewQuestionList } from './AnnualReviewQuestionList/AnnualReviewQuestionList';
import { annualReviewQuestionarieItems } from '../../selectors/annualReviewQuestionnaire';

export interface AnnualReviewQuestionsProps {
  questionnaire: string;
  bottomIndent?: boolean;
}

export const AnnualReviewQuestions = ({ questionnaire, bottomIndent }: AnnualReviewQuestionsProps) => (
  <>
    {annualReviewQuestionarieItems(questionnaire).map((data) => (
      <PageSection title={data.title} key={data.title}>
        <AnnualReviewQuestionList bottomIndent={bottomIndent} items={data.items} />
      </PageSection>
    ))}
  </>
);

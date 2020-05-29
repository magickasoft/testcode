import * as React from 'react';

import { AnnualReviewQuestionColumn } from '../AnnualReviewQuestion/AnnualReviewQuestionColumn';
import { AnnualReviewQuestion } from '../AnnualReviewQuestion';
import { AnnualReviewQuestionsSet } from '../AnnualReviewQuestion/AnnualReviewQuestionsSet';

export interface AnnualReviewQuestionListProps {
  items: string[][];
  bottomIndent?: boolean;
}

export const AnnualReviewQuestionList = ({ items, bottomIndent }: AnnualReviewQuestionListProps) => (
  <AnnualReviewQuestionsSet>
    <AnnualReviewQuestionColumn>
      {items.map(([label, value, params]) => (
        <AnnualReviewQuestion bottomIndent={bottomIndent} {...params} key={label} label={label}>
          {value}
        </AnnualReviewQuestion>
      ))}
    </AnnualReviewQuestionColumn>
  </AnnualReviewQuestionsSet>
);

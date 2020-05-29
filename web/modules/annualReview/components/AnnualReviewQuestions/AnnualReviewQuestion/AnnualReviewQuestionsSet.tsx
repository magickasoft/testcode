import * as React from 'react';
import styles from './annualReviewQuestionsSet.module.css';

export interface AnnualReviewQuestionsSetProps {
  children: React.ReactNode;
}

export const AnnualReviewQuestionsSet: React.FC<AnnualReviewQuestionsSetProps> = ({
  children
}: AnnualReviewQuestionsSetProps) => <div className={styles.questions}>{children}</div>;

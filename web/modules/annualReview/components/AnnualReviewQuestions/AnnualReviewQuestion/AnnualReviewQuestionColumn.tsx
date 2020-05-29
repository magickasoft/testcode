import * as React from 'react';
import styles from './annualReviewQuestionColumn.module.css';

export interface AnnualReviewQuestionColumnProps {
  children: React.ReactNode;
}

export const AnnualReviewQuestionColumn: React.FC<AnnualReviewQuestionColumnProps> = ({
  children
}: AnnualReviewQuestionColumnProps) => <div className={styles.column}>{children}</div>;

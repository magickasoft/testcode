import * as React from 'react';
import cn from 'classnames';

import styles from './annualReviewQuestion.module.css';

export interface AnnualReviewQuestionProps {
  label: string;
  bottomIndent?: boolean;
  multiline?: boolean;
  children: React.ReactNode;
}

export const AnnualReviewQuestion: React.FC<AnnualReviewQuestionProps> = ({
  label,
  bottomIndent = true,
  multiline,
  children
}: AnnualReviewQuestionProps) => (
  <div className={cn(styles.question, { [styles.multiline]: multiline, [styles.bottomIndent]: bottomIndent })}>
    <div className={styles.label}>{label}</div>
    <div className={styles.value}>{children}</div>
  </div>
);

import * as React from 'react';

import styles from './annualReviewSummaryTableTitle.module.css';

export interface AnnualReviewSummaryTableTitleProps {
  children: React.ReactNode;
}

export const AnnualReviewSummaryTableTitle = ({ children }: AnnualReviewSummaryTableTitleProps) => (
  <h4 className={styles.title}>{children}</h4>
);

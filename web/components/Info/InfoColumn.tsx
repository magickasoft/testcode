import * as React from 'react';

import styles from './infoColumn.module.css';

export interface InfoColumnProps {
  children: React.ReactNode;
}

export const InfoColumn: React.FunctionComponent<InfoColumnProps> = ({ children }: InfoColumnProps) => (
  <div className={styles.column}>{children}</div>
);

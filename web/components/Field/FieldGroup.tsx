import * as React from 'react';

import styles from './fieldGroup.module.css';

export interface FieldGroupProps {
  children: React.ReactNode;
}

export const FieldGroup = ({ children }: FieldGroupProps) => <div className={styles.fieldGroup}>{children}</div>;

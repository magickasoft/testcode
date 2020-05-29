import * as React from 'react';
import { CheckBox } from 'components/CheckBox';

import styles from './fieldCheckbox.module.css';

export interface FieldCheckboxProps {
  Field: any;
  label: string;
  name: string;
  value: string;
}

export const FieldCheckbox = ({ Field, name, value, label }: FieldCheckboxProps) => (
  <Field
    name={name}
    input={CheckBox}
    input-htmlValue={value}
    input-children={<span className={styles.label}>{label}</span>}
  />
);

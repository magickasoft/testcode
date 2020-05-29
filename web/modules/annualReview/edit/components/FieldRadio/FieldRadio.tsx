import * as React from 'react';
import { RadioButton } from 'components/RadioButton';

import styles from './fieldRadio.module.css';

export interface FieldRadioProps {
  Field: any;
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
}

export const FieldRadio = ({ Field, label, name, value, disabled }: FieldRadioProps) => (
  <Field
    name={name}
    disabled={disabled}
    input={RadioButton}
    input-htmlValue={value}
    input-children={<span className={styles.label}>{label}</span>}
  />
);

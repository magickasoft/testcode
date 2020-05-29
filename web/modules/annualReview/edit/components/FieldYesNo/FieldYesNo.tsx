import * as React from 'react';
import { FieldGroup } from 'components/Field/FieldGroup';
import { FieldRadio } from '../FieldRadio/FieldRadio';

interface FieldYesNoProps {
  Field: any;
  name: string;
  disabled?: boolean;
}

export const FieldYesNo = ({ Field, name, disabled }: FieldYesNoProps) => (
  <FieldGroup>
    <FieldRadio Field={Field} name={name} disabled={disabled} value="Yes" label="Yes" />
    <FieldRadio Field={Field} name={name} disabled={disabled} value="No" label="No" />
  </FieldGroup>
);

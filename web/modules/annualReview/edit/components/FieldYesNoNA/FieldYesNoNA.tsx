import * as React from 'react';
import { FieldGroup } from 'components/Field/FieldGroup';
import { FieldRadio } from '../FieldRadio/FieldRadio';

interface FieldYesNoNAProps {
  name: string;
  Field: any;
}

export const FieldYesNoNA = ({ Field, name }: FieldYesNoNAProps) => (
  <FieldGroup>
    <FieldRadio Field={Field} key={1} name={name} value="Yes" label="Yes" />
    <FieldRadio Field={Field} key={2} name={name} value="No" label="No" />
    <FieldRadio Field={Field} key={3} name={name} value="N/A" label="N/A" />
  </FieldGroup>
);

FieldYesNoNA.displayName = 'FieldYesNoNA';

import * as React from 'react';
import { momentDate } from 'utils/moment';
import { DatePicker } from 'components/DatePicker';

export interface FieldDateProps {
  Field: any;
  name: string;
}

const formatMoment = (value) => (value == null ? value : momentDate(value));

const parseMoment = (value) => momentDate(value).format('YYYY-MM-DDTHH:mm:ssZ');

export const FieldDate = ({ Field, name }: FieldDateProps) => (
  <Field name={name} input={DatePicker} input-format="YYYY-MM-DD" parseValue={parseMoment} formatValue={formatMoment} />
);

import * as React from 'react';
import { getFrequencyLabel } from './getFrequencyLabel';

export interface FrequencyLabelProps {
  name: string;
}

export const FrequencyLabel: React.FunctionComponent<FrequencyLabelProps> = ({ name }: FrequencyLabelProps) => (
  <span>{getFrequencyLabel(name)}</span>
);

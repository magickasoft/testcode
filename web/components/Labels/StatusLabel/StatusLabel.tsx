import * as React from 'react';
import { getStatusLabel } from './getStatusLabel';

export interface StatusLabelProps {
  name: string;
}

export const StatusLabel: React.FunctionComponent<StatusLabelProps> = ({ name }: StatusLabelProps) => (
  <span>{getStatusLabel(name)}</span>
);

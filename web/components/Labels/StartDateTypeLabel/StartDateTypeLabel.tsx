import * as React from 'react';
import { getStartDateTypeLabel } from './getStartDateTypeLabel';

export interface StartDateTypeLabelProps {
  name: string;
}

export const StartDateTypeLabel: React.FunctionComponent<StartDateTypeLabelProps> = ({
  name
}: StartDateTypeLabelProps) => <span>{getStartDateTypeLabel(name)}</span>;

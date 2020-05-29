/* eslint-disable max-len */
import * as React from 'react';
import { getLicensePosTypeLabel } from './getLicensePosTypeLabel';

export interface LicensePosTypeLabelProps {
  name: string;
}

export const LicensePosTypeLabel: React.FunctionComponent<LicensePosTypeLabelProps> = ({
  name
}: LicensePosTypeLabelProps) => <span>{getLicensePosTypeLabel(name)}</span>;

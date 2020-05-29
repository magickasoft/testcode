/* eslint-disable max-len */
import * as React from 'react';
import { getLicenseSubTypeLabel } from './getLicenseSubTypeLabel';

export interface LicenseSubTypeLabelProps {
  name: string;
}

export const LicenseSubTypeLabel: React.FunctionComponent<LicenseSubTypeLabelProps> = ({
  name
}: LicenseSubTypeLabelProps) => <span>{getLicenseSubTypeLabel(name)}</span>;

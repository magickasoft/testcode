/* eslint-disable max-len */
import * as React from 'react';
import { getLicenseTypeLabel } from './getLicenseTypeLabel';

export interface LicenseTypeLabelProps {
  name: string;
}

export const LicenseTypeLabel: React.FunctionComponent<LicenseTypeLabelProps> = ({ name }: LicenseTypeLabelProps) => (
  <span>{getLicenseTypeLabel(name)}</span>
);

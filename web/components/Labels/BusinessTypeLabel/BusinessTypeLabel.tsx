/* eslint-disable max-len */
import * as React from 'react';
import { getBusinessTypeLabel } from './getBusinessTypeLabel';

export interface BusinessTypeLabelProps {
  name: string;
}

export const BusinessTypeLabel: React.FunctionComponent<BusinessTypeLabelProps> = ({
  name
}: BusinessTypeLabelProps) => <span>{getBusinessTypeLabel(name)}</span>;

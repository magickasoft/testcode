/* eslint-disable max-len */
import * as React from 'react';
import { getCustomerStatusLabel } from './getCustomerStatusLabel';

export interface CustomerStatusLabelProps {
  name: string;
}

export const CustomerStatusLabel: React.FunctionComponent<CustomerStatusLabelProps> = ({
  name
}: CustomerStatusLabelProps) => <span>{getCustomerStatusLabel(name)}</span>;

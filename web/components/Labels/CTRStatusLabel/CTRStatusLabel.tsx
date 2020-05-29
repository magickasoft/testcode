/* eslint-disable max-len */
import * as React from 'react';
import { getCTRStatusLabel } from './getCTRStatusLabel';

export interface CTRStatusLabelProps {
  name: string;
}

export const CTRStatusLabel: React.FunctionComponent<CTRStatusLabelProps> = ({ name }: CTRStatusLabelProps) => (
  <span>{getCTRStatusLabel(name)}</span>
);

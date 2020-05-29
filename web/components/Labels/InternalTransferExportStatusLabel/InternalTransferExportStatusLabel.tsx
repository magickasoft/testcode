/* eslint-disable max-len */
import * as React from 'react';
import { getInternalTransferExportStatusLabel } from './getInternalTransferExportStatusLabel';

export interface InternalTransferExportStatusLabelProps {
  name: string;
}

export const InternalTransferExportStatusLabel = ({ name }: InternalTransferExportStatusLabelProps) => (
  <span>{getInternalTransferExportStatusLabel(name)}</span>
);

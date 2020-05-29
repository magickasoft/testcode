import * as React from 'react';
import { getEntityTypeLabel } from './getEntityTypeLabel';

export interface EntityTypeLabelProps {
  name: string;
}

export const EntityTypeLabel: React.FunctionComponent<EntityTypeLabelProps> = ({ name }: EntityTypeLabelProps) => (
  <span>{getEntityTypeLabel(name)}</span>
);

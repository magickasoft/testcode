import * as React from 'react';
import { Badge, BadgeState } from 'components/Badge';
import { getAnnualReviewStatusLabel } from './getAnnualReviewStatusLabel';

export interface AnnualReviewStatusLabelProps {
  name: string;
  created: number;
  updated: number;
}

const stateMap = {
  complete: BadgeState.DEFAULT,
  completed: BadgeState.DEFAULT,
  approved: BadgeState.DEFAULT,
  incomplete: BadgeState.DANGER,
  new: BadgeState.SUCCESS
};

const mapStatus = ({ created, updated, name }) => {
  if (name === 'new' && created !== updated) {
    return 'incomplete';
  }

  return name;
};

export const AnnualReviewStatusLabel = ({ name, created, updated }: AnnualReviewStatusLabelProps) => (
  <Badge
    state={stateMap[mapStatus({ name, created, updated })]}
    label={getAnnualReviewStatusLabel(mapStatus({ name, created, updated }))}
  />
);

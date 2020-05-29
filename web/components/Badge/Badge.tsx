import * as React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export const enum BadgeState {
  DEFAULT = 'default',
  DANGER = 'danger',
  SUCCESS = 'success'
}

export interface BadgeProps {
  label: string;
  state?: keyof typeof BadgeState;
}

export const Badge: React.FunctionComponent<BadgeProps> = ({ state, label }: BadgeProps) => (
  <div className={cn(styles.badge, { [styles[state]]: !!state })}>{label}</div>
);

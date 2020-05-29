import * as React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export interface HeadingSecondaryProps {
  children: React.ReactNode;
  size: string;
}

export const HeadingTitle = ({ children, size }: HeadingSecondaryProps) => (
  <div
    className={cn(styles.heading, {
      [styles[size]]: !!size
    })}
  >
    {children}
  </div>
);

HeadingTitle.SIZE_LARGE = 'large';

import * as React from 'react';

export interface PageProps {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  face?: 'primary' | 'secondary';
  footer?: React.ReactNode;
  subTitle?: React.ReactNode;
  title?: React.ReactNode;
  isPending?: boolean;
}

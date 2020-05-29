import * as React from 'react';

export interface DeletionProps {
  children: React.ReactNode;
}

export const DeletionContainer = ({ children }: DeletionProps) => <div>{children}</div>;

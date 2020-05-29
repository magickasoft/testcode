import * as React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

export const withErrorBoundary = <T extends any>(Component: React.ComponentType<T>) => (props: T) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);

import * as React from 'react';
import { ErrorDetails } from './ErrorDetails';

interface Props {
  children: React.ReactElement;
}

interface State {
  error: Error;
  info: React.ErrorInfo;
}

export class ErrorBoundary extends React.PureComponent<Props> {
  state: State = {
    error: null,
    info: null
  };

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ error, info });
  }

  render() {
    const { children } = this.props;
    const { error, info } = this.state;

    if (error) {
      if (process.env.NODE_ENV !== 'production') {
        return <ErrorDetails data={{ error, info }} />;
      }

      return <ErrorDetails />;
    }

    return children;
  }
}

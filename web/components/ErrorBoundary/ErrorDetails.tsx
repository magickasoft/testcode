import * as React from 'react';
import { Layer } from 'components/Layer';

import styles from './styles.module.css';

interface Props {
  data?: { error: Error; info: React.ErrorInfo };
}

export const ErrorDetails = React.memo((props: Props) => {
  const { data } = props;

  if (!data) {
    return <div>Something went wrong.</div>;
  }

  return (
    <Layer rounded shadowed className={styles.container}>
      <h2>
        Oops, we&apos;ve got an error{' '}
        <span role="img" aria-label="begging">
          🥺
        </span>
      </h2>
      <hr />
      <div className={styles.row}>
        <b>Error:</b> {data.error.message}
      </div>
      <div className={styles.row}>
        <pre>{data.info.componentStack}</pre>
      </div>
    </Layer>
  );
});

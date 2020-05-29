import * as React from 'react';
import { Layer } from 'components/Layer';
import { Link } from 'components/Link';

import styles from './styles.module.css';

interface Props {
  count: number;
  past: boolean;
  daysDue: number;
  url: string;
}

export const AlertedItem = React.memo((props: Props) => {
  const { past, count, daysDue, url } = props;

  return (
    <Layer rounded shadowed={false} className={styles.item}>
      <div className={styles.firstRow}>
        {count} Document(s) {!past && 'due'} {past && <span className={styles.pastDue}>past due</span>}
        {!past && <span className={styles.notDue}>in {daysDue} days</span>}
      </div>
      <Link className={styles.link} to={url}>
        Go To List
      </Link>
    </Layer>
  );
});

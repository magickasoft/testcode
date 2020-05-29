import * as React from 'react';
import { HistoryFieldDetails } from 'modules/history/types';
import { HistoryActionType } from 'modules/history';

import styles from './styles.module.css';

interface Props {
  items: HistoryFieldDetails[];
  actionType: HistoryActionType;
}

export const HistoryRecordDetails = React.memo((props: Props) => {
  const { items, actionType } = props;

  if (!items || !items.length || actionType === HistoryActionType.Create || actionType === HistoryActionType.Delete) {
    return <div>---</div>;
  }

  const [expanded, setExpanded] = React.useState(
    items.reduce(
      (p, c) => ({
        ...p,
        [c.name]: false
      }),
      {}
    )
  );

  const switchExpanded = React.useCallback(
    (name: string) => {
      setExpanded({ ...expanded, [name]: !expanded[name] });
    },
    [expanded]
  );

  return (
    <div>
      {items.map(({ name, actionLabel, newValue, oldValue }) => {
        const oldValueTooBig = oldValue && oldValue.toString().length > 50;
        const newValueTooBig = newValue && newValue.toString().length > 50;

        if (newValueTooBig || oldValueTooBig) {
          return (
            <div className={styles.row}>
              <b>{name}</b> changed from{' '}
              <i>{oldValueTooBig && !expanded[name] ? `${oldValue.toString().slice(0, 50)}...` : oldValue}</i> to{' '}
              <b>
                <i>{newValueTooBig && !expanded[name] ? `${newValue.toString().slice(0, 50)}...` : newValue}</i>
              </b>
              {/* eslint-disable-next-line */}
              <a className={styles.switcherLink} onClick={() => switchExpanded(name)}>
                {expanded[name] ? 'Collapse' : 'Expand details'}
              </a>
            </div>
          );
        }

        return <div className={styles.row} key={name} dangerouslySetInnerHTML={{ __html: actionLabel }} />;
      })}
    </div>
  );
});

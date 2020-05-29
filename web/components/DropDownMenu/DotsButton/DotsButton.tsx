/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */
import * as React from 'react';
import { Icon } from 'components/Icon';

import styles from './styles.module.css';

interface Props {
  open: boolean;
  onClick: () => any;
}

const defaultProps: Props = {
  open: false,
  onClick: undefined
};

export const DotsButton = React.memo((props: Props) => {
  const { open, onClick } = { ...defaultProps, ...props };

  return (
    <div className={styles.button} role="button" onClick={onClick}>
      <Icon type={open ? 'dots-vertical' : 'dots-horizontal'} />
    </div>
  );
});

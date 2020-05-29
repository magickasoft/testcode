import * as React from 'react';
import { Button } from 'components/Button';
import { Link } from 'components/Link';

import styles from './styles.module.css';

export interface ActionsProps {
  editUrl: string;
  isStart?: boolean;
}

export const AnnualReviewActions: React.FC<ActionsProps> = ({ editUrl, isStart }: ActionsProps) => (
  <Link className={styles.link} to={editUrl}>
    <Button face={Button.FACE_SECONDARY} className={styles.edit}>
      {isStart ? 'START' : 'EDIT'}
    </Button>
  </Link>
);

import * as React from 'react';
import { Link } from 'components/Link';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';

import styles from './styles.module.css';

export const Actions = React.memo(() => (
  <Link rounded button className={styles.button} to={`${COMPANIES_LIST_PATH}/add`}>
    Add New
  </Link>
));

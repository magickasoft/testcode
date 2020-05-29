import * as React from 'react';
import { Search } from 'components/Search';
import { Link } from 'components/Link';
import { USERS_LIST_PAGE_PATH } from '../../constants';

import styles from './styles.module.css';

const actions = React.memo(() => (
  <div className={styles.actions}>
    {/* <Search /> */}
    <Link rounded button className={styles.button} to={`${USERS_LIST_PAGE_PATH}/add`}>
      Add New
    </Link>
  </div>
));

export { actions as Actions };

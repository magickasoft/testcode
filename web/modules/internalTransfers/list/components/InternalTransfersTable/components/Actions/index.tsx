import * as React from 'react';
import { Search } from 'components/Search';
import { Link } from 'components/Link';
import { INTERNAL_TRANSFERS_LIST_PAGE_PATH } from 'modules/internalTransfers/list';

import styles from './styles.module.css';

const actions = React.memo(() => (
  <div className={styles.actions}>
    {/* <Search /> */}
    <Link rounded button className={styles.button} to={`${INTERNAL_TRANSFERS_LIST_PAGE_PATH}/add`}>
      Add New
    </Link>
  </div>
));

export { actions as Actions };

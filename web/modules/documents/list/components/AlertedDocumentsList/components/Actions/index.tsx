import * as React from 'react';
import { Search } from 'components/Search';
import { Link } from 'components/Link';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';

import styles from './styles.module.css';

const actions = React.memo(() => (
  <div className={styles.actions}>
    {/* <Search /> */}
    <Link rounded button className={styles.button} to={`${DOCUMENTS_LIST_PAGE_PATH}/add`}>
      Add New
    </Link>
  </div>
));

export { actions as Actions };

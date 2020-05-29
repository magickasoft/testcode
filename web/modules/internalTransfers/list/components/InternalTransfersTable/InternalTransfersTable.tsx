import * as React from 'react';
import { ConnectedTable } from 'modules/tables';
import { filterSettings } from './components/Filter';
import { columns } from './columns';
import { tableSelector } from './tableSelector';
import { dataSource } from './dataSource';
import { Actions } from './components/Actions';

import styles from './styles.module.css';

export const InternalTransfersTable = React.memo(() => (
  <div className={styles.transfersTable}>
    <ConnectedTable
      sequentialFetch
      serverPagination
      columns={columns}
      storePath="internal-transfers"
      menuContainerId="transferTableMenuContainer"
      dataSources={dataSource}
      dataSourceSelector={tableSelector}
      filter={filterSettings()}
      sectionProperties={{ title: 'Internal Transfers List', actions: <Actions /> }}
    />
  </div>
));

import * as React from 'react';
import { ConnectedTable } from 'modules/tables';
import { filterSettings } from './components/Filter';
import { Actions } from './components/Actions';
import { columns } from './columns';
import { tableSelector } from './tableSelector';
import { dataSource } from './dataSource';

export const WholesaleReportsList = React.memo(() => (
  <ConnectedTable
    sequentialFetch
    serverPagination
    columns={columns}
    storePath="wholesaleReports"
    menuContainerId="wholesaleReportsTableMenuContainer"
    dataSources={dataSource}
    dataSourceSelector={tableSelector}
    filter={filterSettings()}
    sectionProperties={{ title: 'Wholesale Reports Queue', actions: <Actions /> }}
  />
));

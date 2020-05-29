import * as React from 'react';
import { LayerPropTypes } from 'components/Layer';
import { ConnectedTable } from 'modules/tables';
import { filterSettings } from './components/Filter';
import { columns } from './columns';
import { tableSelector } from './tableSelector';
import { dataSource } from './dataSource';

export const CompaniesList = React.memo(() => (
  <ConnectedTable
    sequentialFetch
    serverPagination
    menuContainerId="companiesTableMenuContainer"
    columns={columns}
    storePath="companies"
    dataSources={dataSource}
    dataSourceSelector={tableSelector}
    filter={filterSettings()}
  />
));

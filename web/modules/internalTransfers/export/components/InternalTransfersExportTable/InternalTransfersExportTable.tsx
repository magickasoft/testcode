import * as React from 'react';
import { LayerPropTypes } from 'components/Layer';
import { ConnectedTable } from 'modules/tables';
import { PageSection } from 'components/Page/PageSection';
import { filterSettings } from './components/Filter';
import { columns } from './columns';
import { tableSelector } from './tableSelector';
import { dataSource } from './dataSource';

export const InternalTransfersExportTable = React.memo(() => (
  <ConnectedTable
    sequentialFetch
    serverPagination
    columns={columns}
    storePath="internal-transfers-export"
    menuContainerId="transfersExportTableMenuContainer"
    dataSources={dataSource}
    dataSourceSelector={tableSelector}
    filter={filterSettings()}
    sectionProperties={{ title: 'Internal Transfers Export', face: PageSection.FACE_SECONDARY }}
  />
));

import * as React from 'react';
import { PageSection } from 'components/Page';
import { ListModel } from 'utils/list';
import { Layer } from 'components/Layer';
import { ConnectedTable } from 'modules/tables';
import { filterSettings } from './components/Filter';
import { Actions } from './components/Actions';
import { columns } from './columns';
import { tableSelector } from './tableSelector';
import { dataSource } from './dataSource';

interface Properties {
  companies: ListModel;
  licenses: ListModel;
}

export const TaxReconcilliationList = React.memo((properties: Properties) => {
  const { companies, licenses } = properties;

  return (
    <PageSection title="Tax Reconcilliation Queue" actions={<Actions />}>
      <Layer rounded shadowed>
        <ConnectedTable
          menuContainerId="taxReconcilliationTableMenuContainer"
          sequentialFetch
          serverPagination
          layerProperties={{ rounded: false, shadowed: false }}
          columns={columns}
          storePath="taxReconcilliation"
          dataSources={dataSource}
          dataSourceSelector={tableSelector}
          filter={filterSettings(companies, licenses)}
        />
      </Layer>
    </PageSection>
  );
});

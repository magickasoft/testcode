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
}

export const AnnualReviewList = React.memo((properties: Properties) => {
  const { companies } = properties;

  return (
    <PageSection title="Annual Reviews" actions={<Actions />}>
      <Layer rounded shadowed>
        <ConnectedTable
          sequentialFetch
          serverPagination
          layerProperties={{ rounded: false, shadowed: false }}
          columns={columns}
          storePath="annualReview"
          dataSources={dataSource}
          dataSourceSelector={tableSelector}
          filter={filterSettings(companies)}
        />
      </Layer>
    </PageSection>
  );
});

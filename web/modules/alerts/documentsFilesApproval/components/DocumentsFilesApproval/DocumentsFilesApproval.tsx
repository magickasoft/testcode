import * as React from 'react';
import { PageSectionPropTypes } from 'components/Page';
import { LayerPropTypes } from 'components/Layer';
import { ConnectedTable } from 'modules/tables';
import { filterSettings } from './components/Filter';
import { columns } from './columns';
import { tableSelector } from './tableSelector';
import { dataSource } from './dataSource';

interface Props {
  sectionProperties?: typeof PageSectionPropTypes;
  layerProperties?: ReturnType<LayerPropTypes>;
}

export const DocumentsFilesApproval = React.memo((props: Props) => {
  const { sectionProperties, layerProperties } = props;

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      menuContainerId="documentsFilesApprovalTableMenuContainer"
      layerProperties={layerProperties}
      sectionProperties={sectionProperties}
      columns={columns}
      storePath="documents-files-approval"
      dataSources={dataSource}
      dataSourceSelector={tableSelector}
      filter={filterSettings()}
    />
  );
});

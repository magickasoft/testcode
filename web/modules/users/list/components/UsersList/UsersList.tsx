import * as React from 'react';
import { PageSectionPropTypes } from 'components/Page';
import { LayerPropTypes } from 'components/Layer';
import { ConnectedTable } from 'modules/tables';
import { columns } from './columns';
import { tableSelector } from './tableSelector';
import { dataSource } from './dataSource';

interface Properties {
  sectionProperties?: typeof PageSectionPropTypes;
  layerProperties?: ReturnType<LayerPropTypes>;
}

export const UsersList = React.memo((properties: Properties) => {
  const { sectionProperties, layerProperties } = properties;

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      layerProperties={layerProperties}
      sectionProperties={sectionProperties}
      columns={columns}
      storePath="users"
      dataSources={dataSource}
      dataSourceSelector={tableSelector}
      menuContainerId="userTableMenuContainer"
    />
  );
});

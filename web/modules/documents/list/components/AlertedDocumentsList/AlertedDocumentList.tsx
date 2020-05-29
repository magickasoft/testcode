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
  firstAlert: number;
  lastAlert: number;
  initialFilter?: any;
}

export const AlertedDocumentsList = React.memo((props: Props) => {
  const { sectionProperties, layerProperties, firstAlert, lastAlert, initialFilter } = props;

  if (!firstAlert || !lastAlert) {
    return null;
  }

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      menuContainerId="alertedDocumentsTableMenuContainer"
      layerProperties={layerProperties}
      sectionProperties={sectionProperties}
      columns={columns}
      storePath="alerted-documents"
      dataSources={dataSource(firstAlert, lastAlert, initialFilter)}
      dataSourceSelector={tableSelector(firstAlert, lastAlert)}
      filter={filterSettings(firstAlert, lastAlert, initialFilter)}
    />
  );
});

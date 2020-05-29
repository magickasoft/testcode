import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { ConnectedTable } from 'modules/tables';
import { filter } from 'utils/props';

export const columns = () => [
  {
    width: 130,
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    align: 'center',
    title: 'User',
    dataIndex: 'name',
    key: 'name'
  },
  {
    align: 'right',
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  }
];

const defaultProperties = {
  ...PageSectionDefaultProps,
  title: 'Report History',
  face: PageSection.FACE_THIRD
};

const ReportHistoryTable = React.memo(() => {
  const extendedProperties = { ...defaultProperties };

  const dataSource = React.useCallback(
    () => [
      {
        id: 1,
        date: '9/6/2019 4:50 AM',
        name: 'Helios Developer',
        action: 'Changed Status from Reviewed to Incomplete'
      },
      {
        id: 2,
        date: '9/6/2019 4:50 AM',
        name: 'Helios Developer',
        action: 'Changed Status from Incomplete to Reviewed'
      },
      {
        id: 3,
        date: '9/6/2019 4:50 AM',
        name: 'Helios Developer',
        action: 'Changed Status from Reviewed to Incomplete'
      },
      {
        id: 4,
        date: '9/6/2019 4:50 AM',
        name: 'Helios Developer',
        action: 'Created'
      }
    ],
    []
  );

  return (
    <PageSection {...filter(extendedProperties, PageSectionPropTypes)}>
      <ConnectedTable
        layerProperties={{ stretch: false }}
        columns={columns}
        storePath="retailReportHistory"
        dataSources={[
          {
            key: 'retailReportHistory',
            url: '/history-list',
            handler: () => ({ entity_id: 1, entity_type: 5 })
          }
        ]}
        dataSourceSelector={dataSource}
      />
    </PageSection>
  );
});

export { ReportHistoryTable };

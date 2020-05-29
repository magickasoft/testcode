import * as React from 'react';
import sorters from 'utils/sorters';
import { DateTime } from 'components/DateTime';
import { Link } from 'components/Link';
import { ConnectedTable, TableActions } from 'modules/tables';
import { StatusLabel } from 'components/Labels';
import { addPrefix } from 'utils/common';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { MAIN_PATH } from 'modules/main';

export const retailReportsColumns = (data) => [
  {
    title: 'Report',
    dataIndex: 'id',
    key: 'id',
    render: (value, record) => (
      <Link to={`${MAIN_PATH}/retail/analytics/${value}`} face={Link.FACE_DEFAULT}>
        {record?.start_date ? (
          <DateTime utc={record.start_date} timeFormat="" dateFormat={record.quarterly ? '[Q]Q-YYYY' : 'MMM-YYYY'} />
        ) : (
          addPrefix('RR')(value)
        )}
      </Link>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'status'),
    sortOrder: data.sorter.columnKey === 'status' && data.sorter.order,
    render: (name) => <StatusLabel name={name} />
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
    align: 'center',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'start_date'),
    sortOrder: data.sorter.columnKey === 'start_date' && data.sorter.order,
    render: (date) => date && <DateTime utc={date} dateFormat="YYYY/MM/DD" />
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="retailReportsTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/retail/edit/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/retail/edit/${item.id}/delete`
          }
        ]}
      />
    )
  }
];

interface Properties {
  licenseId: number;
}

const RetailReports = React.memo((properties: Properties) => {
  const { licenseId } = properties;

  const retailReportsSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.retailReports.value.records;
  }, []);

  return (
    <ConnectedTable
      menuContainerId="retailReportsTableMenuContainer"
      sectionProperties={{
        title: 'Retail Reports',
        actions: (
          <Link rounded button to={`${MAIN_PATH}/retail/add`} face={Link.FACE_DEFAULT}>
            ADD NEW
          </Link>
        )
      }}
      columns={retailReportsColumns}
      storePath="companyLicense-retailReports"
      dataSources={[
        {
          key: 'retailReports',
          url: '/report-retail-list',
          handler: () => ({ license_id: licenseId })
        }
      ]}
      dataSourceSelector={retailReportsSelector}
    />
  );
});

export { RetailReports };

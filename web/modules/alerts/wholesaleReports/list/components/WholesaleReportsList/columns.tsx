import * as React from 'react';
import { LicenseInfo } from 'components/License';
import { Link } from 'components/Link';
import { DateTime } from 'components/DateTime';
import { TableActions } from 'modules/tables';
import { MAIN_PATH } from 'modules/main';
import sorters from 'utils/sorters';
import { addPrefix } from 'utils/common';
import { StatusLabel } from 'components/Labels';
import { MenuItemTextFace } from 'components/DropDownMenu';

export const columns = (data) => [
  {
    title: 'Report',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'id'),
    sortOrder: data.sorter.columnKey === 'id' && data.sorter.order,
    render: (value, record) => (
      <Link to={`${MAIN_PATH}/wholesale/analytics/${value}`} face={Link.FACE_DEFAULT}>
        {record?.startDate ? (
          <DateTime utc={record.startDate} timeFormat="" dateFormat={record.quarterly ? '[Q]Q-YYYY' : 'MMM-YYYY'} />
        ) : (
          addPrefix('WR')(value)
        )}
      </Link>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'status'),
    sortOrder: data.sorter.columnKey === 'status' && data.sorter.order,
    render: (name) => <StatusLabel name={name} />
  },
  {
    title: 'License',
    dataIndex: 'license',
    key: 'license',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'license'),
    sortOrder: data.sorter.columnKey === 'license' && data.sorter.order,
    render: (value) => <LicenseInfo {...value} />
  },
  {
    title: 'Last Modified Date',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'updatedAt'),
    sortOrder: data.sorter.columnKey === 'updatedAt' && data.sorter.order,
    render: (utc) => utc && <DateTime utc={utc} dateFormat="YYYY/M/D" />
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="wholesaleReportsTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/wholesale/edit/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/wholesale/edit/${item.id}/delete`
          }
        ]}
      />
    )
  }
];

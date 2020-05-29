import * as React from 'react';
import { LicenseInfo } from 'components/License';
// import { Link } from 'components/Link';
import { DateTime } from 'components/DateTime';
import sorters from 'utils/sorters';
import { addPrefix } from 'utils/common';
import { StatusLabel } from 'components/Labels';

export const columns = (data) => [
  {
    title: 'Name',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'id'),
    sortOrder: data.sorter.columnKey === 'id' && data.sorter.order,
    render: (value) => addPrefix('AR')(value)
    // render: value => (
    //   <Link to={`${MAIN_ALERTS_PATH}/${value}`} face={Link.FACE_DEFAULT}>
    //     {`IT-${value}`}
    //   </Link>
    // )
  },
  {
    title: 'Period Collected',
    dataIndex: 'questionnaire',
    key: 'questionnaire',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'questionnaire'),
    sortOrder: data.sorter.columnKey === 'questionnaire' && data.sorter.order,
    render: (value) => JSON.parse(value).financials_period_collected
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
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'company'),
    sortOrder: data.sorter.columnKey === 'company' && data.sorter.order,
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
    title: 'Date of Last Annual Review',
    dataIndex: 'lastArDate',
    key: 'lastArDate',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'lastArDate'),
    sortOrder: data.sorter.columnKey === 'lastArDate' && data.sorter.order,
    render: (utc) => utc && <DateTime utc={utc} dateFormat="YYYY/M/D" />
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  }
];

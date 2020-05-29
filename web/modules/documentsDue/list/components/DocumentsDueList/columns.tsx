import * as React from 'react';
import { CheckMark } from 'components/CheckBox';
import { LicenseInfo } from 'components/License';
import { DateTime } from 'components/DateTime';
import { FrequencyLabel } from 'components/Labels';
import sorters from 'utils/sorters';

export const columns = (data) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'name'),
    sortOrder: data.sorter.columnKey === 'name' && data.sorter.order
  },
  {
    title: 'Internal',
    dataIndex: 'internal',
    key: 'internal',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'internal'),
    render: (active) => (active ? <CheckMark checked={active} rounded size={CheckMark.SIZE_SMALL} /> : null)
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
    title: 'Frequency',
    dataIndex: 'frequency',
    key: 'frequency',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'frequency'),
    sortOrder: data.sorter.columnKey === 'frequency' && data.sorter.order,
    render: (name) => <FrequencyLabel name={name} />
  },
  {
    title: 'Next Due Date',
    dataIndex: 'endDate',
    key: 'endDate',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'endDate'),
    sortOrder: data.sorter.columnKey === 'endDate' && data.sorter.order,
    render: (utc) => utc && <DateTime utc={utc} dateFormat="YYYY/M/D" />
  }
];

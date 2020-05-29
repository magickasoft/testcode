import React from 'react';
import { DateTime } from 'components/DateTime';
import { StatusLabel } from 'components/Labels';
import sorters from 'utils/sorters';

export const documentsApproval = (data) => [
  {
    title: 'File',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'name'),
    sortOrder: data.sorter.columnKey === 'name' && data.sorter.order
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
    title: 'Document Period',
    dataIndex: 'document_period_id',
    key: 'document_period_id',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'document_period_id'),
    sortOrder: data.sorter.columnKey === 'document_period_id' && data.sorter.order
  },
  {
    title: 'Created Date',
    dataIndex: 'created_at',
    key: 'created_at',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'created_at'),
    sortOrder: data.sorter.columnKey === 'created_at' && data.sorter.order,
    render: (utc) => utc && <DateTime utc={utc} dateFormat="YYYY/M/D" />
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  }
];

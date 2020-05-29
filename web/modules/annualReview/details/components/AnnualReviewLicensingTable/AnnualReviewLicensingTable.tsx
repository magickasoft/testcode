import * as React from 'react';
import { Link } from 'components/Link';
import sorters from 'utils/sorters';
import { ConnectedTable } from 'modules/tables';
import { ANNUAL_REVIEW_DETAILS_LICENSING_STORE_PATH } from '../../constants';

export const annualReviewLicensingColumns = (data) => [
  {
    title: 'License Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Issue Date',
    dataIndex: 'issue_date',
    key: 'issue_date',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'issue_date'),
    sortOrder: data.sorter.columnKey === 'issue_date' && data.sorter.order
  },
  {
    title: 'Expiration Date',
    dataIndex: 'expiration_date',
    key: 'expiration_date',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'expiration_date'),
    sortOrder: data.sorter.columnKey === 'expiration_date' && data.sorter.order
  },
  {
    title: 'Number',
    dataIndex: 'license_number',
    key: 'license_number',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'license_number'),
    sortOrder: data.sorter.columnKey === 'license_number' && data.sorter.order
  },
  {
    title: 'Location',
    dataIndex: 'street_address',
    key: 'street_address',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'street_address'),
    sortOrder: data.sorter.columnKey === 'street_address' && data.sorter.order
  },
  {
    title: 'Status',
    dataIndex: 'state',
    key: 'state',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'state'),
    sortOrder: data.sorter.columnKey === 'state' && data.sorter.order
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
      <>
        <Link to={`${record.id}/edit`} face={Link.FACE_DEFAULT}>
          Edit
        </Link>
        <Link to={`${record.id}}/delete`} face={Link.FACE_DEFAULT}>
          Delete
        </Link>
      </>
    )
  }
];

const licensingKey = 'licenses';
const LICENSE_LIST_API_URL = '/license-list';

const dataSourceSelector = (data) => {
  if (!data) {
    return [];
  }

  return data[licensingKey].value.records;
};

const licensingDataSource = ({ companyId }) => [
  {
    key: licensingKey,
    url: LICENSE_LIST_API_URL,
    handler: () => ({
      _options: {
        filters: [
          {
            field: 'company_id',
            type: 'in',
            value: companyId
          }
        ]
      }
    })
  }
];

export interface AnnualReviewLicensingTableProps {
  companyId: number;
}

export const AnnualReviewLicensingTable = ({ companyId }: AnnualReviewLicensingTableProps) => (
  <ConnectedTable
    columns={annualReviewLicensingColumns}
    storePath={ANNUAL_REVIEW_DETAILS_LICENSING_STORE_PATH}
    dataSources={licensingDataSource({ companyId })}
    dataSourceSelector={dataSourceSelector}
  />
);

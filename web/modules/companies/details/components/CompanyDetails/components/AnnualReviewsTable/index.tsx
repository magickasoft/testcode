import * as React from 'react';
import { Link } from 'components/Link';
import sorters from 'utils/sorters';
import { ConnectedTable } from 'modules/tables';
import { StatusLabel } from 'components/Labels';
import { getAnnualReviewDetailUrl } from 'modules/annualReview/details/route';

export const annualReviewsColumns = (data) => [
  {
    title: 'Annual Review Number',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'id'),
    sortOrder: data.sorter.columnKey === 'id' && data.sorter.order,
    render: (value, { id, company_id: companyId }) => (
      <Link to={getAnnualReviewDetailUrl({ id, companyId })} face={Link.FACE_DEFAULT}>
        AR-{id}
      </Link>
    )
  },
  {
    title: 'Financials Date',
    dataIndex: 'financials_end_date',
    key: 'financials_end_date',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'financials_end_date'),
    sortOrder: data.sorter.columnKey === 'financials_end_date' && data.sorter.order
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
    title: 'Date Completed',
    dataIndex: 'completed_date',
    key: 'completed_date',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'completed_date'),
    sortOrder: data.sorter.columnKey === 'completed_date' && data.sorter.order
  },
  {
    title: 'Created Date',
    dataIndex: 'created_at',
    key: 'created_at',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'created_at'),
    sortOrder: data.sorter.columnKey === 'created_at' && data.sorter.order
  }
];

interface Properties {
  companyId: number;
}

const annualReviewsTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const annualReviewsSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.annualReviews.value.records;
  }, []);

  return (
    <ConnectedTable
      sectionProperties={{ title: 'Annual Reviews' }}
      columns={annualReviewsColumns}
      storePath="company-annualReviews"
      dataSources={[
        {
          key: 'annualReviews',
          url: '/annual-review-list',
          handler: () => ({ company_id: companyId })
        }
      ]}
      dataSourceSelector={annualReviewsSelector}
    />
  );
});

export { annualReviewsTable as AnnualReviewsTable };

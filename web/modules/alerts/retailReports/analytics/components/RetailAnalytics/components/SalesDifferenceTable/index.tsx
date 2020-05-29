/* eslint-disable camelcase */
import * as React from 'react';
import { Layer } from 'components/Layer';
import { Table } from 'components/Table';
import { Info } from 'components/Info';
// eslint-disable-next-line max-len
import { AnnualReviewSummaryTableTitle } from 'modules/annualReview/details/components/AnnualReviewSummaryTables/AnnualReviewSummaryTableTitle';

import styles from './styles.module.css';

export const columns = [
  {
    align: 'center',
    width: 125,
    title: 'State System Sales',
    dataIndex: 'metrc',
    key: 'metrc',
    render: (value) => `$ ${value}`
  },
  {
    align: 'center',
    width: 125,
    title: 'Submitted Total',
    dataIndex: 'submitted',
    key: 'submitted',
    render: (value) => `$ ${value}`
  },
  {
    align: 'center',
    width: 125,
    title: '$',
    dataIndex: 'changes_abs',
    key: 'changes_abs',
    render: (value) => `$ ${value}`
  },
  {
    align: 'center',
    width: 125,
    title: '%',
    dataIndex: 'changes_rel',
    key: 'changes_rel'
  }
];

interface Properties {
  value: any;
}

const SalesDifferenceTable = React.memo((properties: Properties) => {
  const { value } = properties;
  const dataSource = value?.sales_metrc_comparison ? [value?.sales_metrc_comparison] : [];
  return (
    <>
      <Layer className={styles.layer} rounded shadowed stretch={false}>
        <AnnualReviewSummaryTableTitle>Sales Difference</AnnualReviewSummaryTableTitle>
        <Table columns={columns} dataSource={dataSource.map((o, i) => ({ id: i, ...o }))} />
      </Layer>
      <Info label="Notes / Red Flag Discussion">{value?.notes || '---'}</Info>
    </>
  );
});

export { SalesDifferenceTable };

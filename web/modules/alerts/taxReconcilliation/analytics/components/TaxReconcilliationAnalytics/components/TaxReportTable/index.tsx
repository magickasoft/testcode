/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { Layer } from 'components/Layer';
import { Table } from 'components/Table';
import { Info } from 'components/Info';
// eslint-disable-next-line max-len
import { AnnualReviewSummaryTableTitle } from 'modules/annualReview/details/components/AnnualReviewSummaryTables/AnnualReviewSummaryTableTitle';
import { filter } from 'utils/props';
import { RowTitles } from '../../utils';

import styles from './styles.module.css';

export const columns = [
  {
    align: 'left',
    width: 125,
    title: 'title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    align: 'right',
    width: 125,
    title: 'value',
    dataIndex: 'value',
    key: 'value'
  }
];

interface Properties {
  value: any;
}
const defaultProperties = {
  ...PageSectionDefaultProps,
  title: 'Tax Report',
  face: PageSection.FACE_THIRD
};

const TaxReportTable = React.memo((properties: Properties) => {
  const extendedProperties = { ...defaultProperties, ...properties };
  const { value } = properties;
  const dataSource = React.useCallback(
    () =>
      [
        {
          title: RowTitles.TaxCollected,
          value: value?.current_month?.collected?.total >= 0 ? `$ ${value?.current_month?.collected?.total}` : ''
        },
        {
          title: RowTitles.CalculatedTax,
          value: value?.current_month?.calculated?.total >= 0 ? `$ ${value?.current_month?.calculated?.total}` : ''
        },
        {
          title: RowTitles.Difference,
          value: value?.current_month?.changes_rel?.total >= 0 ? `$ ${value?.current_month?.changes_rel?.total}` : ''
        },
        {
          title: RowTitles.AbsDifference,
          value: value?.current_month?.changes_abs?.total >= 0 ? `${value?.current_month?.changes_abs?.total} %` : ''
        }
      ].map((o, i) => ({ id: i, ...o })),
    [value]
  );

  return (
    <PageSection {...filter(extendedProperties, PageSectionPropTypes)}>
      <Layer className={styles.layer} rounded shadowed>
        <AnnualReviewSummaryTableTitle>Tax</AnnualReviewSummaryTableTitle>
        <Table showHeader={false} columns={columns} dataSource={dataSource()} />
      </Layer>
      <Info label="Notes">{value?.notes || '---'}</Info>
    </PageSection>
  );
});

export { TaxReportTable };

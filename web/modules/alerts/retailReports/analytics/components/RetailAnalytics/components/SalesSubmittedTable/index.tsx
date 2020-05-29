/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { Layer } from 'components/Layer';
import { Table } from 'components/Table';
import { filter } from 'utils/props';
import { SalesDifferenceTable } from '../SalesDifferenceTable';
import {
  ColumnTitles,
  ColumnTypes,
  ColumnSize,
  DataKeys,
  RowTitles,
  currencyKeys,
  percentKeys,
  calcSalesTable,
  renderTableColumn
} from '../../utils';

import styles from './styles.module.css';
import tableStyles from '../../styles.module.css';

export const columns = ({ setting }) => [
  {
    className: tableStyles.title,
    width: ColumnSize.TITLE,
    fixed: 'left',
    title: '',
    dataIndex: DataKeys.Title,
    key: DataKeys.Title,
    render: (value) => <div className={styles.title}>{value}</div>
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.Total,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.sales_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.TotalQty,
              key: DataKeys.TotalQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.TotalSold,
              key: DataKeys.TotalSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.TotalPerQty,
              key: DataKeys.TotalPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.CashDeposits,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.sales_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.CashQty,
              key: DataKeys.CashQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.CashSold,
              key: DataKeys.CashSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.CashPerQty,
              key: DataKeys.CashPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.Invoices,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.sales_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.InvoicesQty,
              key: DataKeys.InvoicesQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.InvoicesSold,
              key: DataKeys.InvoicesSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.InvoicesPerQty,
              key: DataKeys.InvoicesPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.AtmLoad,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.sales_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.AtmLoadQty,
              key: DataKeys.AtmLoadQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.AtmLoadSold,
              key: DataKeys.AtmLoadSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.AtmLoadPerQty,
              key: DataKeys.AtmLoadPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.InternalTransfers,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.sales_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.InternalTransfersQty,
              key: DataKeys.InternalTransfersQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.InternalTransfersSold,
              key: DataKeys.InternalTransfersSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.InternalTransfersPerQty,
              key: DataKeys.InternalTransfersPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.CreditDebit,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.sales_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.CreditDebitQty,
              key: DataKeys.CreditDebitQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.CreditDebitSold,
              key: DataKeys.CreditDebitSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.CreditDebitPerQty,
              key: DataKeys.CreditDebitPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.Other,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.sales_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.OtherQty,
              key: DataKeys.OtherQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.OtherSold,
              key: DataKeys.OtherSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.sales_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.OtherPerQty,
              key: DataKeys.OtherPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  }
];

interface Properties {
  value: any;
  organizationSetting: any;
}
const defaultProperties = {
  ...PageSectionDefaultProps,
  title: 'Sales Submitted',
  face: PageSection.FACE_THIRD,
  organizationSetting: undefined
};

const SalesSubmittedTable = React.memo((properties: Properties) => {
  const extendedProperties = { ...defaultProperties, ...properties };
  const { value, organizationSetting } = properties;
  const isQuarterly = value?.quarterly || false;
  const setting = organizationSetting?.report_setting?.retail;
  const dataSource = React.useCallback(
    () =>
      [
        {
          title: isQuarterly ? RowTitles.CurrentQuarterly : RowTitles.CurrentMonth,
          ...currencyKeys(value?.sales_current_month?.values)
        },
        {
          title: isQuarterly ? RowTitles.PriorQuarterly : RowTitles.PriorMonth,
          ...currencyKeys(value?.sales_prior_month?.values)
        },
        ...(!isQuarterly
          ? [
              {
                title: RowTitles.Prior3MonthAvg,
                ...currencyKeys(value?.sales_prior_3_month?.values)
              }
            ]
          : []),
        {
          title: RowTitles.Change
        },
        {
          title: isQuarterly ? RowTitles.PriorQuarterly : RowTitles.PriorMonth,
          ...percentKeys(value?.sales_prior_month?.changes, value?.alerted_fields?.sales_prior_month)
        },
        ...(!isQuarterly
          ? [
              {
                title: RowTitles.Prior3MonthAvg,
                ...percentKeys(value?.sales_prior_3_month?.changes, value?.alerted_fields?.sales_prior_3_month)
              }
            ]
          : [])
      ].map((o, i) => ({ id: i, ...o })),
    [value]
  );
  const x = calcSalesTable(setting);
  return (
    <PageSection {...filter(extendedProperties, PageSectionPropTypes)}>
      <Layer className={styles.layer} rounded shadowed stretch={false}>
        <Table columns={columns({ setting })} dataSource={dataSource()} scroll={{ x }} />
      </Layer>
      <SalesDifferenceTable value={value} />
    </PageSection>
  );
});

export { SalesSubmittedTable };

/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { Layer } from 'components/Layer';
import { Table } from 'components/Table';
import { filter } from 'utils/props';
import {
  calcProductTable,
  ColumnSize,
  ColumnTitles,
  ColumnTypes,
  currencyKeys,
  DataKeys,
  percentKeys,
  RowTitles,
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
      ...(setting?.prod_qty
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
      ...(setting?.prod_amount
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
      ...(setting?.prod_per_qty
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
    title: ColumnTitles.BudOrFlower,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.prod_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.BudQty,
              key: DataKeys.BudQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.BudSold,
              key: DataKeys.BudSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.BudPerQty,
              key: DataKeys.BudPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.Concentrate,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.prod_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.ConcentrateQty,
              key: DataKeys.ConcentrateQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.ConcentrateSold,
              key: DataKeys.ConcentrateSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.ConcentratePerQty,
              key: DataKeys.ConcentratePerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.Infused,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.prod_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.InfusedQty,
              key: DataKeys.InfusedQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.InfusedSold,
              key: DataKeys.InfusedSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.InfusedPerQty,
              key: DataKeys.InfusedPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.Plants,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.prod_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.PlantsQty,
              key: DataKeys.PlantsQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.PlantsSold,
              key: DataKeys.PlantsSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.PlantsPerQty,
              key: DataKeys.PlantsPerQty,
              render: renderTableColumn
            }
          ]
        : [])
    ]
  },
  {
    className: tableStyles.darkTitle,
    align: 'center',
    title: ColumnTitles.ShakeOrTrim,
    width: ColumnSize.TOTAL,
    children: [
      ...(setting?.prod_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.QTY,
              title: ColumnTypes.Quantity,
              dataIndex: DataKeys.ShakeTrimQty,
              key: DataKeys.ShakeTrimQty,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_amount
        ? [
            {
              align: 'center',
              width: ColumnSize.AMOUNT,
              title: ColumnTypes.Amount,
              dataIndex: DataKeys.ShakeTrimSold,
              key: DataKeys.ShakeTrimSold,
              render: renderTableColumn
            }
          ]
        : []),
      ...(setting?.prod_per_qty
        ? [
            {
              align: 'center',
              width: ColumnSize.PER_QTY,
              title: ColumnTypes.PerQuantity,
              dataIndex: DataKeys.ShakeTrimPerQty,
              key: DataKeys.ShakeTrimPerQty,
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
      ...(setting?.prod_qty
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
      ...(setting?.prod_amount
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
      ...(setting?.prod_per_qty
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
  title: 'Product Report',
  face: PageSection.FACE_THIRD,
  organizationSetting: undefined
};

const ProductReportTable = React.memo((properties: Properties) => {
  const extendedProperties = { ...defaultProperties, ...properties };
  const { value, organizationSetting } = properties;
  const isQuarterly = value?.quarterly || false;
  const setting = organizationSetting?.report_setting?.retail;
  const dataSource = React.useCallback(
    () =>
      [
        {
          title: isQuarterly ? RowTitles.CurrentQuarterly : RowTitles.CurrentMonth,
          ...currencyKeys(value?.product_current_month?.values)
        },
        {
          title: isQuarterly ? RowTitles.PriorQuarterly : RowTitles.PriorMonth,
          ...currencyKeys(value?.product_prior_month?.values)
        },
        ...(!isQuarterly
          ? [
              {
                title: RowTitles.Prior3MonthAvg,
                ...currencyKeys(value?.product_prior_3_month?.values)
              }
            ]
          : []),
        {
          title: RowTitles.PeerGroup,
          ...currencyKeys(value?.product_peer_group?.values)
        },
        {
          title: RowTitles.Change
        },
        {
          title: isQuarterly ? RowTitles.PriorQuarterly : RowTitles.PriorMonth,
          ...percentKeys(value?.product_prior_month?.changes, value?.alerted_fields?.product_prior_month)
        },
        ...(!isQuarterly
          ? [
              {
                title: RowTitles.Prior3MonthAvg,
                ...percentKeys(value?.product_prior_3_month?.changes, value?.alerted_fields?.product_prior_3_month)
              }
            ]
          : []),
        {
          title: RowTitles.PeerGroup,
          ...percentKeys(value?.product_peer_group?.changes, value?.alerted_fields?.product_peer_group)
        }
      ].map((o, i) => ({ id: i, ...o })),
    [value]
  );
  const x = calcProductTable(setting);
  return (
    <PageSection {...filter(extendedProperties, PageSectionPropTypes)}>
      <Layer className={styles.layer} rounded shadowed stretch={false}>
        <Table columns={columns({ setting })} dataSource={dataSource()} scroll={{ x }} />
      </Layer>
    </PageSection>
  );
});

export { ProductReportTable };

/* eslint-disable */
import * as React from 'react';
import styles from './styles.module.css';

export enum RowTitles {
  CurrentQuarterly = 'Current Quarterly',
  CurrentMonth = 'Current Month',
  PriorQuarterly = 'Prior Quarterly',
  PriorMonth = 'Prior Month',
  Prior3MonthAvg = 'Prior 3 Month Average',
  PeerGroup = 'Peer Group',
  Change = '% Change',
}

export enum ColumnTitles {
  Total = 'Total',
  BudOrFlower = 'Bud or Flower',
  Concentrate = 'Concentrate',
  Infused = 'Infused',
  Plants = 'Plants',
  ShakeOrTrim = 'Shake or Trim',
  Other = 'Other',
  CashDeposits = 'Cash Deposits',
  CreditDebit = 'Credit or Debit',
  AtmLoad = 'ATM Load',
  Invoices = 'Invoices',
  InternalTransfers = 'Internal transfers',
  Checks = 'Checks',
}

export enum ColumnTypes {
  Quantity = 'Quantity',
  Amount = 'Amount',
  PerQuantity = '$ per Quantity',
}

export enum DataKeys {
  Title = 'title',
  TotalQty = 'total_qty',
  TotalSold = 'total_sold',
  TotalPerQty = 'total_per_qty',
  BudQty = 'bud_qty',
  BudSold = 'bud_sold',
  BudPerQty = 'bud_per_qty',
  ConcentrateQty = 'concentrate_qty',
  ConcentrateSold = 'concentrate_sold',
  ConcentratePerQty = 'concentrate_per_qty',
  InfusedQty = 'infused_qty',
  InfusedSold = 'infused_sold',
  InfusedPerQty = 'infused_per_qty',
  PlantsQty = 'plants_qty',
  PlantsSold = 'plants_sold',
  PlantsPerQty = 'plants_per_qty',
  ShakeTrimQty = 'shake_trim_qty',
  ShakeTrimSold = 'shake_trim_sold',
  ShakeTrimPerQty = 'shake_trim_per_qty',
  OtherQty = 'other_qty',
  OtherSold = 'other_sold',
  OtherPerQty = 'other_per_qty',
  CashQty = 'cash_qty',
  CashSold = 'cash_sold',
  CashPerQty = 'cash_per_qty',
  InvoicesQty = 'invoices_qty',
  InvoicesSold = 'invoices_sold',
  InvoicesPerQty = 'invoices_per_qty',
  InternalTransfersQty = 'internal_transfers_qty',
  InternalTransfersSold = 'internal_transfers_sold',
  InternalTransfersPerQty = 'internal_transfers_per_qty',
  ChecksQty = 'checks_qty',
  ChecksSold = 'checks_sold',
  ChecksPerQty = 'checks_per_qty',
  CreditDebitQty = 'credit_debit_qty',
  CreditDebitSold = 'credit_debit_sold',
  CreditDebitPerQty = 'credit_debit_per_qty',
  AtmLoadQty = 'atm_load_qty',
  AtmLoadSold = 'atm_load_sold',
  AtmLoadPerQty = 'atm_load_per_qty',
}

const currencyArray = [
  DataKeys.TotalSold,
  DataKeys.TotalPerQty,
  DataKeys.BudSold,
  DataKeys.BudPerQty,
  DataKeys.ConcentrateSold,
  DataKeys.ConcentratePerQty,
  DataKeys.InfusedSold,
  DataKeys.InfusedPerQty,
  DataKeys.PlantsSold,
  DataKeys.PlantsPerQty,
  DataKeys.ShakeTrimSold,
  DataKeys.ShakeTrimPerQty,
  DataKeys.OtherSold,
  DataKeys.OtherPerQty,
  DataKeys.CashSold,
  DataKeys.CashPerQty,
  DataKeys.InvoicesSold,
  DataKeys.InvoicesPerQty,
  DataKeys.InternalTransfersSold,
  DataKeys.InternalTransfersPerQty,
  DataKeys.ChecksSold,
  DataKeys.ChecksPerQty,
  DataKeys.CreditDebitSold,
  DataKeys.CreditDebitPerQty,
  DataKeys.AtmLoadSold,
  DataKeys.AtmLoadPerQty,
];

export const renderTableColumn = (item) => ({
  props: {
    className: item?.isHighlighted ? styles.row : ''
  },
  children: item?.value || item
})

export const currencyKeys = (obj = {}) => {
  const updatedObj = {};
  Object.keys(obj).map(key => {
    let value = obj[key];
    if (currencyArray.some(o => o === key)) {
      value = `$ ${obj[key]}`;
    }
    updatedObj[key] = value;
  });
  return updatedObj;
}

export const percentKeys = (obj = {}, backlightKeys = []) => {
  const updatedObj = {};
  Object.keys(obj).map(key => {
    let value: any = {
      value: `${obj[key]} %`,
      isHighlighted: false,
    }
    if (obj[key] <= -1) {
      value = {
        ...value,
        value: 'N/A',
      };
    }

    if((backlightKeys || []).some(item => item === key)) {
      value = {
        value: value.value,
        isHighlighted: true,
      };
    }
    updatedObj[key] = value;
  });
  return updatedObj;
}

export const salesSections = 6;
export const productSections = 7;

export enum ColumnSize {
  TITLE = 160,
  TOTAL = 304,
  QTY = 90,
  AMOUNT = 104, //166
  PER_QTY = 110
}

export const calcSalesTable = setting => {
  const salesQty = setting?.sales_qty ? salesSections * ColumnSize.QTY : 0;
  const salesAmount = setting?.sales_amount ? salesSections * ColumnSize.AMOUNT : 0;
  const salesPerQty = setting?.sales_per_qty ? salesSections * ColumnSize.PER_QTY : 0;
  return ColumnSize.TITLE + salesQty + salesAmount + salesPerQty;
}

export const calcProductTable = setting => {
  const prodQty = setting?.prod_qty ? productSections * ColumnSize.QTY : 0;
  const prodAmount = setting?.prod_amount ? productSections * ColumnSize.AMOUNT : 0;
  const prodPerQty = setting?.prod_per_qty ? productSections * ColumnSize.PER_QTY : 0;
  return ColumnSize.TITLE + prodQty + prodAmount + prodPerQty;
}

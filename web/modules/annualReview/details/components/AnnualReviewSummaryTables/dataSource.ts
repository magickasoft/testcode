import { formatCurrency } from 'utils/currency';
import { modelAnnualReviewSalesDeposits } from 'types/foundation';

type LicenseSubtype = 'dispensary' | 'grow' | 'processor';

export const createSalesDataSources = (item: modelAnnualReviewSalesDeposits, subtype: LicenseSubtype) =>
  [
    {
      id: 'Deposits',
      name: 'Deposits',
      quarter1: formatCurrency(item.quarter1_info.deposits),
      quarter2: formatCurrency(item.quarter2_info.deposits),
      quarter3: formatCurrency(item.quarter3_info.deposits),
      quarter4: formatCurrency(item.quarter4_info.deposits),
      total: ''
    },
    subtype === 'dispensary' && {
      id: 'Point of Sale',
      name: 'Point of Sale',
      quarter1: formatCurrency(item.quarter1_info.pos),
      quarter2: formatCurrency(item.quarter2_info.pos),
      quarter3: formatCurrency(item.quarter3_info.pos),
      quarter4: formatCurrency(item.quarter4_info.pos),
      total: ''
    },
    {
      id: 'Metrc Sales',
      name: 'Metrc Sales',
      quarter1: formatCurrency(item.quarter1_info.metrc),
      quarter2: formatCurrency(item.quarter2_info.metrc),
      quarter3: formatCurrency(item.quarter3_info.metrc),
      quarter4: formatCurrency(item.quarter4_info.metrc),
      total: ''
    },
    {
      id: 'Revenue from Financials',
      name: 'Revenue from Financials',
      quarter1: '',
      quarter2: '',
      quarter3: '',
      quarter4: '',
      total: formatCurrency(item.total_financials)
    }
  ].filter(Boolean);

export const createDepositDataSources = (item: modelAnnualReviewSalesDeposits, subtype: LicenseSubtype) =>
  [
    {
      id: 'Cash Deposit',
      name: 'Cash Deposit',
      quarter1: formatCurrency(item.quarter1_info.cash),
      quarter2: formatCurrency(item.quarter2_info.cash),
      quarter3: formatCurrency(item.quarter3_info.cash),
      quarter4: formatCurrency(item.quarter4_info.cash),
      total: ''
    },
    {
      id: 'Cash Invoices',
      name: 'Cash Invoices',
      quarter1: formatCurrency(item.quarter1_info.invoices),
      quarter2: formatCurrency(item.quarter2_info.invoices),
      quarter3: formatCurrency(item.quarter3_info.invoices),
      quarter4: formatCurrency(item.quarter4_info.invoices),
      total: ''
    },
    {
      id: 'Internal Transfers',
      name: 'Internal Transfers',
      quarter1: formatCurrency(item.quarter1_info.transfers),
      quarter2: formatCurrency(item.quarter2_info.transfers),
      quarter3: formatCurrency(item.quarter3_info.transfers),
      quarter4: formatCurrency(item.quarter4_info.transfers),
      total: ''
    },
    (subtype === 'grow' || subtype === 'processor') && {
      id: 'Checks & Remote Deposit',
      name: 'Internal Transfers',
      quarter1: formatCurrency(item.quarter1_info.checks),
      quarter2: formatCurrency(item.quarter2_info.checks),
      quarter3: formatCurrency(item.quarter3_info.checks),
      quarter4: formatCurrency(item.quarter4_info.checks),
      total: ''
    },
    {
      id: 'Credit / Debit',
      name: 'Credit / Debit',
      quarter1: formatCurrency(item.quarter1_info.credit_debit),
      quarter2: formatCurrency(item.quarter2_info.credit_debit),
      quarter3: formatCurrency(item.quarter3_info.credit_debit),
      quarter4: formatCurrency(item.quarter4_info.credit_debit),
      total: ''
    },
    {
      id: 'Other',
      name: 'Other',
      quarter1: formatCurrency(item.quarter1_info.other),
      quarter2: formatCurrency(item.quarter2_info.other),
      quarter3: formatCurrency(item.quarter3_info.other),
      quarter4: formatCurrency(item.quarter4_info.other),
      total: ''
    },
    {
      id: 'Total Deposit',
      name: 'Total Deposit',
      quarter1: formatCurrency(0),
      quarter2: formatCurrency(0),
      quarter3: formatCurrency(0),
      quarter4: formatCurrency(0),
      total: ''
    }
  ].filter(Boolean);

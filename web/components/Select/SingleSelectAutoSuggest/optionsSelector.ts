import { SelectListName } from './selectListName';

const regions = [
  'AK',
  'AL',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
  'Washington, DC'
];

export const getOptionsByListName = (name: SelectListName) => {
  if (name === SelectListName.WholesaleReportQueueStatus || name === SelectListName.RetailReportQueueStatus) {
    return [
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Pending Review', value: 'pending_review' }
    ];
  }

  if (name === SelectListName.InternalTransferStatus) {
    return [
      { label: 'New', value: 'new' },
      { label: 'Pending Approval', value: 'pending_approval' },
      { label: 'Approved', value: 'approved' },
      { label: 'Cancelled', value: 'cancelled' },
      { label: 'Processed', value: 'processed' }
    ];
  }

  if (name === SelectListName.BooleanFilter) {
    return [
      { label: 'Yes', value: true },
      { label: 'No', value: false }
    ];
  }

  if (name === SelectListName.Frequency) {
    return [
      { label: 'All', value: '' },
      { label: 'Every 2 years', value: 'every_2_years' },
      { label: 'Annual', value: 'annual' },
      { label: 'Semi-Annual', value: 'semi-annual' },
      { label: 'Quarterly', value: 'quarterly' },
      { label: 'Monthly', value: 'monthly' },
      { label: 'One-Time', value: 'one-time' }
    ];
  }

  if (name === SelectListName.InternalTransferExportStatus) {
    return [
      { label: 'New', value: 'new' },
      { label: 'Processed', value: 'processed' }
    ];
  }

  if (name === SelectListName.CustomerStatus) {
    return [
      { label: 'Qualified Lead', value: 'qualified_lead' },
      { label: 'Applicant', value: 'applicant' },
      { label: 'Pending Customer', value: 'pending_customer' },
      { label: 'Customer', value: 'customer' },
      { label: 'Denied Customer', value: 'denied_customer' },
      { label: 'Former Customer', value: 'former_customer' }
    ];
  }

  if (name === SelectListName.EntityType) {
    return [
      { label: 'Corporation', value: 'corporation' },
      { label: 'LLC', value: 'llc' },
      { label: 'Partnership', value: 'partnership' },
      { label: 'Sole Proprietor', value: 'sole_proprietor' }
    ];
  }

  if (name === SelectListName.BusinessType) {
    return [
      { label: 'MRB', value: 'mrb' },
      { label: 'MRB Related', value: 'mrb_related' },
      { label: 'Ancillary', value: 'ancillary' },
      { label: 'Hemp', value: 'hemp' },
      { label: 'Investment', value: 'investment' }
    ];
  }

  if (name === SelectListName.StartDateType) {
    return [
      { label: 'Account Opening', value: 'account_opening' },
      { label: 'Calendar', value: 'calendar' },
      { label: 'License Issue', value: 'license_issue' },
      { label: 'Last Delivery', value: 'last_delivery' },
      { label: '---', value: '' }
    ];
  }

  if (name === SelectListName.DocumentPeriodStatus) {
    return [
      { label: 'New', value: 'new' },
      { label: 'Approved', value: 'approved' }
    ];
  }

  if (name === SelectListName.StateOfIncorporation) {
    return regions.map((state) => ({ label: state, value: state }));
  }

  return null;
};

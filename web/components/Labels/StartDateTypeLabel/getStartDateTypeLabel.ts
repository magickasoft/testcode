const startDateTypeLabelMap = {
  calendar: 'Calendar',
  account_opening: 'Account Opening',
  license_issue: 'License Issue',
  last_delivery: 'Last Delivery'
};

export const getStartDateTypeLabel = (name) => startDateTypeLabelMap[name] || name;

import addDays from 'date-fns/addDays';

const defaultFilter = {
  company_id: '',
  due_status: '',
  license_id: '',
  expiration_delay_days: '',
  internal: '',
  frequency: ''
};

export const getDueOptions = (value: string, firstAlert: number, lastAlert: number) => {
  const now = new Date();

  if (value === 'past-due') {
    return [{ field: 'expiration_date', type: 'lte', value: now }];
  }

  if (value === 'first-alert') {
    return [
      { field: 'expiration_date', type: 'gte', value: addDays(now, lastAlert) },
      { field: 'expiration_date', type: 'lte', value: addDays(now, firstAlert) }
    ];
  }

  if (value === 'last-alert') {
    return [
      { field: 'expiration_date', type: 'gte', value: now },
      { field: 'expiration_date', type: 'lte', value: addDays(now, lastAlert) }
    ];
  }

  return [];
};

export const getFilterOptions = (
  firstAlert: number,
  lastAlert: number,
  current: any = defaultFilter,
  previous?: any
) => {
  const internalAsString = current?.internal ? current.internal.toString() : '';

  const companyChanged =
    (typeof previous?.company_id !== 'undefined' && previous?.company_id !== current?.company_id) ||
    (typeof previous?.company_id === 'undefined' && current?.company_id);

  return {
    internal: current?.internal,
    due_status: current?.due_status,
    company_id: current?.company_id,
    license_id: companyChanged ? null : current?.license_id,
    frequency: current?.frequency,
    _options: {
      filters: [
        internalAsString ? { field: 'internal', type: 'eq', value: internalAsString === 'true' } : null,
        current?.company_id ? { field: 'company_id', type: 'eq', value: current?.company_id } : null,
        companyChanged ? null : current?.license_id && { field: 'license_id', type: 'eq', value: current?.license_id },
        current?.frequency ? { field: 'frequency', type: 'eq', value: current?.frequency } : null
      ]
        .concat(getDueOptions(current?.due_status, firstAlert, lastAlert))
        .filter(Boolean)
    },
    orders: [{ field: 'expiration_date', direction: 'ASC' }]
  };
};

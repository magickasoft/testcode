import uniq from 'lodash/uniq';

export const dataSource = [
  {
    key: 'taxReconcilliation',
    url: '/report-tax-reconciliation-list',
    handler: () => ({})
  },
  {
    key: 'licenses',
    url: '/license-list',
    handler: (data) => ({
      _options: {
        filters: [
          {
            field: 'id',
            type: 'in',
            value: uniq(data.taxReconcilliation.value.records.map((i) => i.license_id))
          }
        ]
      }
    })
  },
  {
    key: 'companies',
    url: '/company-list',
    handler: (data) => ({
      _options: {
        filters: [
          {
            field: 'id',
            type: 'in',
            value: uniq(data.licenses.value.records.map((i) => i.company_id))
          }
        ]
      }
    })
  }
];

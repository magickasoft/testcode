export const dataSource = [
  {
    key: 'documentsDue',
    url: '/document-period-alerts-list',
    handler: () => ({})
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
            value: data.documentsDue.value.records.map((i) => i.company_id)
          }
        ]
      }
    })
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
            value: data.documentsDue.value.records.map((i) => i.license_id)
          }
        ]
      }
    })
  }
];

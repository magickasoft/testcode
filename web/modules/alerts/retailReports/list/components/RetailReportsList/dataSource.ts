import uniq from 'lodash/uniq';

export const dataSource = [
  {
    key: 'retailReports',
    url: '/report-retail-list',
    handler: () => ({
      _options: {
        orders: [{ field: 'id', direction: 'DESC' }],
        offset: 0,
        limit: 10,
        filters: [
          {
            field: 'status',
            type: 'eq',
            value: 'incomplete'
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
            value: uniq(data.retailReports.value.records.map((i) => i.license_id))
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

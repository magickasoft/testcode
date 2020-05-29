import uniq from 'lodash/uniq';

export const dataSource = [
  {
    key: 'files',
    url: '/document-file-list',
    handler: () => ({
      _options: {
        filters: [
          {
            field: 'status',
            type: 'eq',
            value: 'new'
          }
        ],
        orders: [{ field: 'created_at', direction: 'DESC' }]
      }
    })
  },
  {
    key: 'periods',
    url: '/document-period-list',
    handler: (data) => ({
      _options: {
        filters: [
          {
            field: 'id',
            type: 'in',
            value: uniq(data.files.value.records.map((i) => i.document_period_id))
          }
        ]
      }
    })
  },
  {
    key: 'documents',
    url: '/document-list',
    handler: (data) => ({
      _options: {
        filters: [
          {
            field: 'id',
            type: 'in',
            value: uniq(data.periods.value.records.map((i) => i.document_id))
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
            value: uniq(data.documents.value.records.map((i) => i.company_id))
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
            value: uniq(data.documents.value.records.map((i) => i.license_id))
          }
        ]
      }
    })
  }
];

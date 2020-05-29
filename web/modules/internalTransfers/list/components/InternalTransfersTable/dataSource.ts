import flatten from 'lodash/flatten';

export const dataSource = [
  {
    key: 'internalTransfers',
    url: '/internal-transfer-list',
    handler: () => ({
      _options: {
        orders: [{ field: 'id', direction: 'DESC' }],
        offset: 0,
        limit: 10
      }
    })
  },
  {
    key: 'relatedLicenses',
    url: '/license-list',
    handler: (data) => ({
      _options: {
        filters: [
          {
            field: 'id',
            type: 'in',
            value: flatten(
              data.internalTransfers.value.records.map((i) => [i.sender_license_id, i.recipient_license_id])
            )
          }
        ]
      }
    })
  },
  {
    key: 'relatedCompanies',
    url: '/company-list',
    handler: (data) => ({
      _options: {
        filters: [
          {
            field: 'id',
            type: 'in',
            value: data.relatedLicenses.value.records.map((i) => i.company_id)
          }
        ]
      }
    })
  }
];

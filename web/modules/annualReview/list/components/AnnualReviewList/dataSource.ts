import uniq from 'lodash/uniq';

export const dataSource = [
  {
    key: 'annualReview',
    url: '/annual-review-list',
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
            value: uniq(data.annualReview.value.records.map((i) => i.company_id))
          }
        ]
      }
    })
  }
];

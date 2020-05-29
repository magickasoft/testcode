export const dataSource = [
  {
    key: 'internalTransfersExport',
    url: '/internal-transfers-export-list',
    handler: () => ({
      _options: {
        orders: [{ field: 'id', direction: 'DESC' }],
        offset: 0,
        limit: 10
      }
    })
  }
];

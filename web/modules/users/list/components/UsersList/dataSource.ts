export const dataSource = [
  {
    key: 'users',
    url: '/user-list',
    handler: () => ({
      _options: {
        limit: 1000,
        orders: [{ field: 'updated_at', direction: 'ASC' }]
      }
    })
  }
];

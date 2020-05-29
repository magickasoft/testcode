import { HistoryEntityType } from '../../enums';

export const dataSources = (id?: number, type?: HistoryEntityType) => [
  {
    key: 'main',
    url: '/history-list',
    handler: () => ({
      _options: {
        filters: [
          id ? { field: 'entity_id', type: 'eq', value: id } : null,
          type ? { field: 'entity_type', type: 'eq', value: type } : null
        ].filter(Boolean),
        orders: [{ field: 'created_at', direction: 'DESC' }],
        offset: 0,
        limit: 10
      }
    })
  }
];

import { getFilterOptions } from './getOptions';

export const dataSource = (firstAlert: number, lastAlert: number, initialFilter?: any) => [
  {
    key: 'documents',
    url: '/webpages/document-list',
    handler: () => getFilterOptions(firstAlert, lastAlert, initialFilter)
  }
];

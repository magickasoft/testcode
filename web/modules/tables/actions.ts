import { GET_TABLE_DATA, FORCE_TABLE_UPDATE } from './constants';
import { ConnectedTableDataSource } from './types';

export const getTableData = (
  path: string,
  dataSources: ConnectedTableDataSource[],
  sequential?: boolean,
  baseFilter?: any,
  offset?: number,
  limit?: number,
  orders?: { field: string; direction?: string }[]
) => ({
  type: GET_TABLE_DATA,
  payload: { path, dataSources, sequential, baseFilter, offset, limit, orders }
});

export const forceTableUpdate = (path: string, resetFilter?: boolean) => ({
  type: FORCE_TABLE_UPDATE,
  payload: { path, resetFilter }
});

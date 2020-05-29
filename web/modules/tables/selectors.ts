import { TABLES_STORE_ID } from './constants';

interface BaseTableState {
  loading: boolean;
  error: unknown;
  data: unknown;
}

export const getTableDataSelector = (path: string) => (state): BaseTableState => {
  const tables = state[TABLES_STORE_ID];

  return tables[path] ?? ({ loading: false, error: null, data: null } as BaseTableState);
};

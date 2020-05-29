import { api } from 'modules/api';
import { clean } from 'utils/common';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { GET_TABLE_DATA, GET_TABLE_DATA_FAILURE, GET_TABLE_DATA_SUCCESS } from './constants';
import { getTableDataSelector } from './selectors';
import { ConnectedTableDataSource } from './types';

interface TableActionPayload {
  path: string;
  dataSources: ConnectedTableDataSource[];
  sequential: boolean;
  baseFilter: {
    [key: string]: unknown;
  };
  offset: number;
  limit: number;
  orders: { field: string; direction?: string }[];
}

function* tableDataFetcher(action) {
  const { path, dataSources, sequential, baseFilter, offset, limit, orders } = action.payload as TableActionPayload;

  try {
    if (sequential) {
      const tableSelector = getTableDataSelector(path);
      let tableData = (yield select(tableSelector)).data;

      for (let i = 0; i < dataSources.length; i += 1) {
        const source: ConnectedTableDataSource = dataSources[i];
        const filter = i === 0 && !!baseFilter ? clean(baseFilter) : source.handler(tableData);

        const filterWithPagination = i
          ? filter
          : {
              ...filter,
              _options: {
                // eslint-disable-next-line
              ...filter._options,
                offset,
                limit,
                orders
              }
            };

        const { data } = yield call(api.post, source.url, filterWithPagination);

        tableData = { ...tableData, [source.key]: { filter: filterWithPagination, value: { ...data } } };
      }

      yield put({
        type: GET_TABLE_DATA_SUCCESS,
        payload: {
          path,
          dataSources: tableData
        }
      });
    } else {
      const responses = yield all(dataSources.map((source) => call(api.post, source.url, source.handler())));

      yield put({
        type: GET_TABLE_DATA_SUCCESS,
        payload: {
          path,
          dataSources: responses.reduce((accumulator, current, index) => {
            const source: ConnectedTableDataSource = dataSources[index];
            const filter = (!index && baseFilter ? clean(baseFilter) : null) || source.handler();
            const filterWithPagination = index
              ? filter
              : Object.assign(filter, limit ? { _options: { offset, limit } } : null);

            return {
              ...accumulator,
              [dataSources[index].key]: {
                filter: filterWithPagination,
                value: current.data
              }
            };
          }, {})
        }
      });
    }
  } catch (error) {
    yield put({
      type: GET_TABLE_DATA_FAILURE,
      payload: { path, error }
    });
  }
}

export function* tablesSaga() {
  yield takeEvery(GET_TABLE_DATA, tableDataFetcher);
}

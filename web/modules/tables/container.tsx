import * as React from 'react';
import { clean } from 'utils/common';
import { isEqual, cloneDeep } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'utils/props';
import { Table, TableDefaultProps, TablePropTypes } from 'components/Table';
import { Layer, LayerDefaultProps, LayerPropTypes } from 'components/Layer';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { getTableData } from './actions';
import { getTableDataSelector } from './selectors';
import { ConnectedTableDataSource } from './types';

export interface ConnectedTableColumn {
  title: string;
  dataIndex: string;
  key: string;
  sorter?: (a, b) => number;
  sortOrder?: string;
  render?: (value: any, record: any) => React.ReactNode;
}

interface Properties {
  columns: (data: any) => ConnectedTableColumn[];
  storePath: string;
  dataSources: ConnectedTableDataSource[];
  dataSourceSelector: (data: any) => any[];
  sequentialFetch?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  sectionProperties?: ReturnType<PageSectionPropTypes>;
  tableProperties?: ReturnType<TablePropTypes>;
  layerProperties?: ReturnType<LayerPropTypes>;
  filter?: {
    component: React.ComponentType<any>;
    value: any;
    [rest: string]: any;
    onChange?: (previous: any, current: any, data?: any) => any;
    hiddenFields?: string[];
  };
  serverPagination?: boolean;
  menuContainerId?: string;
}

const ConnectedTable = React.memo((properties: Properties) => {
  const {
    columns,
    storePath,
    dataSources,
    dataSourceSelector,
    sectionProperties,
    tableProperties,
    layerProperties,
    sequentialFetch,
    serverPagination,
    menuContainerId,
    filter: Filter
  } = properties;

  /**
   * Base table data.
   */

  const dispatch = useDispatch();
  const tableSelector = getTableDataSelector(storePath);
  const { data, loading, signal } = useSelector(tableSelector);

  /**
   * Properties passed to component.
   */

  const composedSectionProperties = { ...PageSectionDefaultProps, ...sectionProperties };
  const composedLayerProperties = { ...LayerDefaultProps, ...layerProperties };
  const composedTableProperties = { ...TableDefaultProps, ...tableProperties };

  /**
   * Table filter data.
   */

  const filterFormValue = Filter ? Filter.value : null;
  const initialFilterPlainValue = React.useRef(filterFormValue ? clean(filterFormValue.getValue()) : null);

  const plainFilter = data
    ? data[dataSources[0].key].filter
    : { ...initialFilterPlainValue.current, ...dataSources[0].handler() };

  const [isFilterExpanded, setExpanded] = React.useState(false);
  const onFilterToggle = React.useCallback(() => setExpanded(!isFilterExpanded), [isFilterExpanded]);

  /**
   * Pagination data.
   */

  const offset = plainFilter?._options?.offset || 0;
  const limit = plainFilter?._options?.limit || 10;
  const orders = plainFilter?._options?.orders || [];

  // eslint-disable-next-line
  const total = data ? data[dataSources[0].key].value?.total_count || 0 : 0;

  const onFilterClear = React.useCallback(() => {
    dispatch(getTableData(storePath, dataSources, sequentialFetch, initialFilterPlainValue.current, 0, limit, orders));
  }, [storePath, dataSources, columns, filterFormValue]);

  const onFilterChange = React.useCallback(
    (form) => {
      const { onChange } = Filter;

      const filterValue = onChange ? onChange(plainFilter, form.getValue(), data) : form.getValue();

      const action = getTableData(storePath, dataSources, sequentialFetch, filterValue, 0, limit, orders);

      dispatch(action);
    },
    [storePath, dataSources, columns, filterFormValue, Filter, plainFilter]
  );

  const onPageChange = React.useCallback(
    (page, size) => {
      dispatch(getTableData(storePath, dataSources, sequentialFetch, plainFilter, (page - 1) * size, size, orders));
    },
    [storePath, dataSources, columns, plainFilter, limit, orders]
  );

  React.useEffect(() => {
    dispatch(
      getTableData(
        storePath,
        dataSources,
        sequentialFetch,
        signal?.resetFilter ? initialFilterPlainValue.current : plainFilter,
        offset,
        limit,
        orders
      )
    );
  }, [signal]);

  const filterComponent = Filter
    ? (() => {
        const { component: Component, hiddenFields, ...rest } = Filter;

        return (
          <Component
            {...rest}
            isClear={isEqual(initialFilterPlainValue.current, plainFilter)}
            isExpanded={isFilterExpanded}
            onToggle={onFilterToggle}
            onClear={onFilterClear}
            onChange={onFilterChange}
            value={filterFormValue.setValue(plainFilter)}
            hiddenFields={hiddenFields}
          />
        );
      })()
    : null;

  const layer = (
    <Layer rounded shadowed stretch {...filter(composedLayerProperties, LayerPropTypes)}>
      {filterComponent}
      {menuContainerId && <div id={menuContainerId} />}
      <Table
        {...filter(composedTableProperties, TablePropTypes)}
        highlightSelectedRow
        loading={loading}
        customColumns={columns}
        dataSource={dataSourceSelector(data)}
        pagination={
          serverPagination && {
            total,
            defaultCurrent: 1,
            current: offset / limit + 1,
            pageSize: limit,
            onChange: onPageChange
          }
        }
      />
    </Layer>
  );

  if (!sectionProperties?.title) {
    return layer;
  }

  return <PageSection {...filter(composedSectionProperties, PageSectionPropTypes)}>{layer}</PageSection>;
});

export { ConnectedTable };

import React from 'react';
import AntTable from 'antd/es/table';
import { func, bool, array, object } from 'prop-types';
import bem from 'utils/bem';
import TableController from './TableController';
import './Table.scss';

export const TablePropTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  ...AntTable.propTypes,
  dataSource: array,
  loading: bool,
  customColumns: func,
  withRowSelection: bool,
  pagination: object,
  highlightSelectedRow: bool
};

export const TableDefaultProps = {
  withRowSelection: false,
  dataSource: undefined,
  loading: false,
  customColumns: () => [],
  pagination: undefined,
  highlightSelectedRow: false
};

export class Table extends TableController {
  static propTypes = TablePropTypes;

  static defaultProps = TableDefaultProps;

  static className = 'Table';

  id = `table-${Date.now()}`;

  get columns() {
    const { sorter } = this.state;
    const { customColumns } = this.props;
    return customColumns({ sorter });
  }

  handleRowClick = (index) => {
    const rows = document.querySelectorAll(`#${this.id} tr`);

    [...rows].forEach((row) => {
      row.classList.remove(bem.element(this, 'active'));
    });

    const row = rows[index + 1];
    row.classList.add(bem.element(this, 'active'));
  };

  render() {
    const { highlightSelectedRow, withRowSelection, dataSource, pagination, ...props } = this.props;

    return (
      <div className={bem.block(this)} id={this.id}>
        <AntTable
          onRow={(_: any, rowIndex: any) => ({
            onClick: highlightSelectedRow ? this.handleRowClick.bind(this, rowIndex) : undefined
          })}
          dataSource={dataSource}
          rowKey={(o) => o.id}
          onChange={this.onTableChange}
          pagination={pagination?.total > pagination?.pageSize ? pagination || true : false}
          rowSelection={withRowSelection ? this.rowSelection : undefined}
          columns={this.columns}
          {...props}
        />
      </div>
    );
  }
}

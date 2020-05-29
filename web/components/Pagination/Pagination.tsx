import React from 'react';
import AntdPagination, { PaginationProps as AntdPaginationProps } from 'antd/es/pagination';

export type PaginationProps = AntdPaginationProps;

export const Pagination = (props: PaginationProps) => <AntdPagination {...props} />;

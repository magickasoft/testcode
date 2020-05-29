/* eslint-disable camelcase */
import * as React from 'react';
import { PageSection, PageSectionDefaultProps, PageSectionPropTypes } from 'components/Page';
import { Layer } from 'components/Layer';
import { Table } from 'components/Table';
import { filter } from 'utils/props';

export const columns = [
  {
    align: 'center',
    width: 125,
    title: 'File Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    align: 'center',
    width: 125,
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    align: 'center',
    width: 125,
    title: 'Uploaded Date',
    dataIndex: 'updated_at',
    key: 'updated_at'
  },
  {
    align: 'center',
    width: 125,
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes'
  },
  {
    align: 'center',
    width: 125,
    title: 'Action',
    dataIndex: 'id',
    key: 'id'
  }
];

interface Properties {
  value: any;
}
const defaultProperties = {
  ...PageSectionDefaultProps,
  title: 'Files',
  face: PageSection.FACE_SECONDARY
};

const TaxReportTable = React.memo((properties: Properties) => {
  const extendedProperties = { ...defaultProperties, ...properties };
  const { value } = properties;
  const dataSource = React.useCallback(() => [].map((o, i) => ({ id: i, ...o })), [value]);

  return (
    <PageSection {...filter(extendedProperties, PageSectionPropTypes)}>
      <Layer rounded shadowed>
        <Table columns={columns} dataSource={dataSource()} />
      </Layer>
    </PageSection>
  );
});

export { TaxReportTable };

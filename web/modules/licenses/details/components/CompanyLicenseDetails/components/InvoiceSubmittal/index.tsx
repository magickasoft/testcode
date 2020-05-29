import * as React from 'react';
import { Link } from 'components/Link';
import sorters from 'utils/sorters';
import { DateTime } from 'components/DateTime';
import { ConnectedTable, TableActions } from 'modules/tables';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { addPrefix } from 'utils/common';
import { MAIN_PATH } from 'modules/main';

export const invoiceSubmittalColumns = (data) => [
  {
    title: 'Invoice Submittal Number',
    dataIndex: 'id',
    key: 'id',
    render: (value, record) => (
      <Link to={`${MAIN_PATH}/invoiceSubmittal/details/${value}`} face={Link.FACE_DEFAULT}>
        {record?.startDate ? (
          <DateTime utc={record.startDate} timeFormat="" dateFormat="MMM-YYYY" />
        ) : (
          addPrefix('IS')(value)
        )}
      </Link>
    )
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'center',
    render: (id) => `$ ${id}`
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes',
    align: 'center'
  },
  {
    title: 'Last Modified Date',
    dataIndex: 'updated_at',
    key: 'updated_at',
    align: 'center',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'updated_at'),
    sortOrder: data.sorter.columnKey === 'updated_at' && data.sorter.order,
    render: (date) => date && <DateTime utc={date} dateFormat="YYYY/MM/DD" />
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="invoiceSubmittalTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/invoiceSubmittal/edit/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/invoiceSubmittal/edit/${item.id}/delete`
          }
        ]}
      />
    )
  }
];

interface Properties {
  licenseId: number;
}

const InvoiceSubmittal = React.memo((properties: Properties) => {
  const { licenseId } = properties;

  const invoiceSubmittalSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.invoiceSubmittal.value.records;
  }, []);

  return (
    <ConnectedTable
      menuContainerId="invoiceSubmittalTableMenuContainer"
      sectionProperties={{
        title: 'Invoice Submittal',
        actions: (
          <Link rounded button to={`${MAIN_PATH}/invoiceSubmittal/add`} face={Link.FACE_DEFAULT}>
            ADD NEW
          </Link>
        )
      }}
      columns={invoiceSubmittalColumns}
      storePath="companyLicense-invoiceSubmittal"
      dataSources={[
        {
          key: 'invoiceSubmittal',
          url: '/invoice-submittal-list',
          handler: () => ({ license_id: licenseId })
        }
      ]}
      dataSourceSelector={invoiceSubmittalSelector}
    />
  );
});

export { InvoiceSubmittal };

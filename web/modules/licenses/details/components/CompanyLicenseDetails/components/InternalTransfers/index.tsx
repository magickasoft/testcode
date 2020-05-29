import * as React from 'react';
import { Link } from 'components/Link';
import sorters from 'utils/sorters';
import { DateTime } from 'components/DateTime';
import { ConnectedTable, TableActions } from 'modules/tables';
import { StatusLabel } from 'components/Labels';
import { MAIN_INTERNAL_TRANSFERS_PATH } from 'modules/main';
import { MenuItemTextFace } from 'components/DropDownMenu';

export const internalTransfersColumns = (data) => [
  {
    title: 'Transfer number',
    dataIndex: 'id',
    key: 'id',
    render: (id) => `IT-${id}`
  },
  {
    title: 'Sender',
    dataIndex: 'senderName',
    key: 'senderName'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'center',
    render: (amount) => `$ ${amount}`
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'status'),
    sortOrder: data.sorter.columnKey === 'status' && data.sorter.order,
    render: (name) => <StatusLabel name={name} />
  },
  {
    title: 'Created Date',
    dataIndex: 'created_at',
    key: 'created_at',
    align: 'center',
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
        menuContainerId="transferTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_INTERNAL_TRANSFERS_PATH}/edit/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_INTERNAL_TRANSFERS_PATH}/edit/${item.id}/delete`
          }
        ]}
      />
    )
  }
];

interface Properties {
  licenseId: number;
}

const InternalTransfers = React.memo((properties: Properties) => {
  const { licenseId } = properties;

  const internalTransfersSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.internalTransfers.value.records.map((record) => {
      const sender = data.relatedLicenses.value.records.find((i) => i.id === record.sender_license_id);

      return {
        id: record.id,
        senderName: sender?.name || '---',
        amount: record.amount,
        status: record.status,
        created_at: record.created_at
      };
    });
  }, []);

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      menuContainerId="transferTableMenuContainer"
      sectionProperties={{
        title: 'Internal Transfers',
        actions: (
          <Link
            rounded
            button
            to={`${MAIN_INTERNAL_TRANSFERS_PATH}/add?licenseId=${licenseId}`}
            face={Link.FACE_DEFAULT}
          >
            ADD NEW
          </Link>
        )
      }}
      columns={internalTransfersColumns}
      storePath="companyLicense-internalTransfers"
      dataSources={[
        {
          key: 'internalTransfers',
          url: '/internal-transfer-list',
          handler: () => ({
            recipient_license_id: licenseId,
            _options: {
              orders: [{ field: 'created_at', direction: 'DESC' }],
              offset: 0,
              limit: 10
            }
          })
        },
        {
          key: 'relatedLicenses',
          url: '/license-list',
          handler: (data) => ({
            _options: {
              filters: [
                {
                  field: 'id',
                  type: 'in',
                  value: data.internalTransfers.value.records.map((i) => i.sender_license_id)
                }
              ]
            }
          })
        }
      ]}
      dataSourceSelector={internalTransfersSelector}
    />
  );
});

export { InternalTransfers };

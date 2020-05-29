import * as React from 'react';
import { Link } from 'components/Link';
import { ConnectedTable, TableActions } from 'modules/tables';
import { MenuItemTextFace } from 'components/DropDownMenu';

export const accountSignersColumns = (data) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, item) => `${item.first_name} ${item.last_name}`.trim()
  },
  {
    title: 'Entity Name',
    dataIndex: 'entityName',
    key: 'entityName'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    align: 'center',
    width: '50px',
    render: () => (
      <TableActions
        menuContainerId="accountSignersTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `#`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `#`
          }
        ]}
      />
    )
  }
];

interface Properties {
  companyId: number;
}

const accountSignersTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const accountSignersSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.contactsDetails.value.records;
  }, []);

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      menuContainerId="accountSignersTableMenuContainer"
      sectionProperties={{
        title: 'Account Signers',
        actions: (
          <Link rounded button to="#" face={Link.FACE_DEFAULT}>
            ADD NEW
          </Link>
        )
      }}
      columns={accountSignersColumns}
      storePath="company-accountSigners"
      dataSources={[
        {
          key: 'contactsMetadata',
          url: '/contact-metadata-list',
          handler: () => ({ company_id: companyId })
        },
        {
          key: 'contactsDetails',
          url: '/contact-list',
          handler: (data) => ({
            _options: {
              filters: [
                {
                  field: 'id',
                  type: 'in',
                  value: data.contactsMetadata.value.records.filter((i) => i.is_account_signer).map((i) => i.contact_id)
                }
              ]
            }
          })
        }
      ]}
      dataSourceSelector={accountSignersSelector}
    />
  );
});

export { accountSignersTable as AccountSignersTable };

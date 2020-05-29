import * as React from 'react';
import { Link } from 'components/Link';
import { ConnectedTable, TableActions } from 'modules/tables';
import { MenuItemTextFace } from 'components/DropDownMenu';

export const ownersColumns = (data) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, item) => `${item.first_name} ${item.last_name}`.trim()
  },
  {
    title: 'Ownership',
    dataIndex: 'ownership',
    key: 'ownership'
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
        menuContainerId="ownersTableMenuContainer"
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

const ownersTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const ownersSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.contactsDetails.value.records.map((item) => ({
      ...item,
      ownership: data.contactsMetadata.value.records.find((i) => i.contact_id === item.id)?.ownership
    }));
  }, []);

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      menuContainerId="ownersTableMenuContainer"
      sectionProperties={{
        title: 'Owners',
        actions: (
          <Link rounded button to="#" face={Link.FACE_DEFAULT}>
            ADD NEW
          </Link>
        )
      }}
      columns={ownersColumns}
      storePath="company-owners"
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
                  value: data.contactsMetadata.value.records.filter((i) => i.is_owner).map((i) => i.contact_id)
                }
              ]
            }
          })
        }
      ]}
      dataSourceSelector={ownersSelector}
    />
  );
});

export { ownersTable as OwnersTable };

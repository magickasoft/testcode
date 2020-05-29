import * as React from 'react';
import sorters from 'utils/sorters';
import { Switch } from 'react-router-dom';
import { Link } from 'components/Link';
import { DialogRoute } from 'components/Dialog';
import { ConnectedTable, TableActions } from 'modules/tables';
import { CheckMark } from 'components/CheckBox';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { EditContactDialog } from 'modules/companies/edit';

export const contactsColumns = (companyId: number) => (data) => [
  {
    title: 'Name',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'name'),
    sortOrder: data.sorter.columnKey === 'name' && data.sorter.order,
    render: (value, record) => [record.first_name, record.last_name].join(' ')
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'email'),
    sortOrder: data.sorter.columnKey === 'email' && data.sorter.order
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'phone'),
    sortOrder: data.sorter.columnKey === 'phone' && data.sorter.order
  },
  {
    title: 'Documents',
    dataIndex: 'is_documents',
    key: 'is_documents',
    align: 'center',
    render: (isDocuments) => (isDocuments ? <CheckMark checked rounded size={CheckMark.SIZE_SMALL} /> : null)
  },
  {
    title: 'Financials',
    dataIndex: 'is_financials',
    key: 'is_financials',
    align: 'center',
    render: (isFinancials) => (isFinancials ? <CheckMark checked rounded size={CheckMark.SIZE_SMALL} /> : null)
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="contactsTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${companyId}/edit-contact/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/edit/${item.id}/delete`
          }
        ]}
      />
    )
  }
];

interface Properties {
  companyId: number;
}

const contactsTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const contactsSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.contacts.value.records;
  }, []);

  return (
    <>
      <ConnectedTable
        menuContainerId="contactsTableMenuContainer"
        sectionProperties={{
          title: 'Contacts',
          actions: (
            <Link rounded button to="#" face={Link.FACE_DEFAULT}>
              ADD NEW
            </Link>
          )
        }}
        columns={contactsColumns(companyId)}
        storePath="company-contacts"
        dataSources={[
          {
            key: 'contacts',
            url: '/contact-list',
            handler: () => ({ company_id: companyId })
          }
        ]}
        dataSourceSelector={contactsSelector}
      />
      <Switch>
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/${companyId}/add-contact`}
          component={EditContactDialog}
          closePath={`${COMPANIES_LIST_PATH}/${companyId}`}
          dialog-title="Add Contact"
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/${companyId}/edit-contact/:contactId`}
          component={EditContactDialog}
          closePath={`${COMPANIES_LIST_PATH}/${companyId}`}
          dialog-title="Edit Contact"
        />
      </Switch>
    </>
  );
});

export { contactsTable as ContactsTable };

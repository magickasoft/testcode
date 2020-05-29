import * as React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedTable, TableActions } from 'modules/tables';
import { Link } from 'components/Link';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { EditCustomerDialog, DeleteCustomerDialog } from 'modules/companies/edit';
import { DialogRoute } from 'components/Dialog';
import { MenuItemTextFace } from 'components/DropDownMenu';

const customersColumns = (companyId: number) => (data) => [
  {
    title: 'Customer Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="customersTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${companyId}/edit-customer/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${companyId}/delete-customer/${item.id}`
          }
        ]}
      />
    )
  }
];

interface Properties {
  companyId: number;
}

const customersTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const customersSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.customers.value.records;
  }, []);

  return (
    <>
      <ConnectedTable
        sequentialFetch
        serverPagination
        menuContainerId="customersTableMenuContainer"
        sectionProperties={{
          title: 'Customers',
          actions: (
            <Link
              rounded
              button
              to={`${COMPANIES_LIST_PATH}/detail/${companyId}/add-customer`}
              face={Link.FACE_DEFAULT}
            >
              ADD NEW
            </Link>
          )
        }}
        columns={customersColumns(companyId)}
        storePath="company-customers"
        dataSources={[
          {
            key: 'customers',
            url: '/customer-list',
            handler: () => ({
              _options: {
                filters: [
                  {
                    field: 'company_id',
                    type: 'eq',
                    value: companyId
                  }
                ],
                orders: [{ field: 'name', direction: 'ASC' }]
              }
            })
          }
        ]}
        dataSourceSelector={customersSelector}
      />
      <Switch>
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/add-customer`}
          component={EditCustomerDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Add Customer"
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/edit-customer/:customerId`}
          component={EditCustomerDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Edit Customer"
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/delete-customer/:customerId`}
          component={DeleteCustomerDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Delete Customer"
        />
      </Switch>
    </>
  );
});

export { customersTable as CustomersTable };

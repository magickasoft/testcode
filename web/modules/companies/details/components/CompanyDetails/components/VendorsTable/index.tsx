import * as React from 'react';
import sorters from 'utils/sorters';
import { Switch } from 'react-router-dom';
import { DialogRoute } from 'components/Dialog';
import { ConnectedTable, TableActions } from 'modules/tables';
import { Link } from 'components/Link';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { DeleteVendorDialog, EditVendorDialog } from 'modules/companies/edit';

export const vendorsColumns = (companyId: number) => (data) => [
  {
    title: 'Vendor Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'name'),
    sortOrder: data.sorter.columnKey === 'name' && data.sorter.order
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="vendorsTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${companyId}/edit-vendor/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${companyId}/delete-vendor/${item.id}`
          }
        ]}
      />
    )
  }
];

interface Properties {
  companyId: number;
}

const vendorsTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const vendorsSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.vendors.value.records;
  }, []);

  return (
    <>
      <ConnectedTable
        sequentialFetch
        serverPagination
        menuContainerId="vendorsTableMenuContainer"
        sectionProperties={{
          title: 'Vendors',
          actions: (
            <Link rounded button to={`${COMPANIES_LIST_PATH}/detail/${companyId}/add-vendor`} face={Link.FACE_DEFAULT}>
              ADD NEW
            </Link>
          )
        }}
        columns={vendorsColumns(companyId)}
        storePath="company-vendors"
        dataSources={[
          {
            key: 'vendors',
            url: '/vendor-list',
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
        dataSourceSelector={vendorsSelector}
      />
      <Switch>
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/add-vendor`}
          component={EditVendorDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Add Vendor"
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/edit-vendor/:vendorId`}
          component={EditVendorDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Edit Vendor"
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/delete-vendor/:vendorId`}
          component={DeleteVendorDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Delete Vendor"
        />
      </Switch>
    </>
  );
});

export { vendorsTable as VendorsTable };

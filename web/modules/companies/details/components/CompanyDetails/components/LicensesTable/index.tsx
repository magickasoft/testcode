import * as React from 'react';
import sorters from 'utils/sorters';
import { ConnectedTable, TableActions } from 'modules/tables';
import { Link } from 'components/Link';
import { licenseListPath } from 'modules/licenses/list';
import { manageLicensePath } from 'modules/licenses/edit';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';

const licensesColumns = (data) => [
  {
    title: 'License Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'name'),
    sortOrder: data.sorter.columnKey === 'name' && data.sorter.order,
    render: (value, { company_id: companyId, id }) => (
      <Link to={`${licenseListPath}/${companyId}/${id}`} face={Link.FACE_DEFAULT}>
        {value}
      </Link>
    )
  },
  {
    title: 'License Subtype',
    dataIndex: 'subtype',
    key: 'subtype',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'subtype'),
    sortOrder: data.sorter.columnKey === 'subtype' && data.sorter.order
  },
  {
    title: 'License Number',
    dataIndex: 'license_number',
    key: 'license_number',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'license_number'),
    sortOrder: data.sorter.columnKey === 'license_number' && data.sorter.order
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'city'),
    sortOrder: data.sorter.columnKey === 'city' && data.sorter.order
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'state'),
    sortOrder: data.sorter.columnKey === 'state' && data.sorter.order
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'phone'),
    sortOrder: data.sorter.columnKey === 'phone' && data.sorter.order
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="licensesTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${manageLicensePath}/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${item.company_id}/delete-license/${item.id}`
          }
        ]}
      />
    )
  }
];

interface Properties {
  companyId: number;
}

const licensesTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const licensesSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.licenses.value.records;
  }, []);

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      menuContainerId="licensesTableMenuContainer"
      sectionProperties={{
        title: 'Licenses',
        actions: (
          <Link rounded button to={`${manageLicensePath}/0?companyId=${companyId}`} face={Link.FACE_DEFAULT}>
            ADD NEW
          </Link>
        )
      }}
      columns={licensesColumns}
      storePath="company-licenses"
      dataSources={[
        {
          key: 'licenses',
          url: '/license-list',
          handler: () => ({ company_id: companyId })
        }
      ]}
      dataSourceSelector={licensesSelector}
    />
  );
});

export { licensesTable as LicensesTable };

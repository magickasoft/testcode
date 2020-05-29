import * as React from 'react';
import sorters from 'utils/sorters';
import { DateTime } from 'components/DateTime';
import { Link } from 'components/Link';
import { ConnectedTable, TableActions } from 'modules/tables';
import { StatusLabel } from 'components/Labels';
import { addPrefix } from 'utils/common';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { MAIN_PATH } from 'modules/main';

export const taxReconciliationsColumns = (data) => [
  {
    title: 'Name',
    dataIndex: 'id',
    key: 'id',
    render: (value, record) => (
      <Link to={`${MAIN_PATH}/taxReconcilliation/analytics/${value}`} face={Link.FACE_DEFAULT}>
        {record?.start_date ? (
          <DateTime utc={record.start_date} timeFormat="" dateFormat="MMM-YYYY" />
        ) : (
          addPrefix('TR')(value)
        )}
      </Link>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (name) => <StatusLabel name={name} />
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
    sorter: (a, b) => sorters.sortCollectionByPath(a, b, 'start_date'),
    sortOrder: data.sorter.columnKey === 'start_date' && data.sorter.order,
    align: 'center',
    render: (date) => date && <DateTime utc={date} dateFormat="YYYY/MM/DD" />
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="taxReconciliationsTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/taxReconcilliation/edit/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${MAIN_PATH}/taxReconcilliation/edit/${item.id}/delete`
          }
        ]}
      />
    )
  }
];

interface Properties {
  licenseId: number;
}

const TaxReconciliations = React.memo((properties: Properties) => {
  const { licenseId } = properties;

  const taxReconciliationsSelector = React.useCallback((data: any) => {
    if (!data) {
      return [];
    }

    return data.taxReconciliations.value.records;
  }, []);

  return (
    <ConnectedTable
      menuContainerId="taxReconciliationsTableMenuContainer"
      sectionProperties={{
        title: 'Tax Reconciliations',
        actions: (
          <Link rounded button to={`${MAIN_PATH}/taxReconcilliation/add`} face={Link.FACE_DEFAULT}>
            ADD NEW
          </Link>
        )
      }}
      columns={taxReconciliationsColumns}
      storePath="companyLicense-taxReconciliations"
      dataSources={[
        {
          key: 'taxReconciliations',
          url: '/report-tax-reconciliation-list',
          handler: () => ({ license_id: licenseId })
        }
      ]}
      dataSourceSelector={taxReconciliationsSelector}
    />
  );
});

export { TaxReconciliations };

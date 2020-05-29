import * as React from 'react';
import uniq from 'lodash/uniq';
import { Switch } from 'react-router-dom';
import { DialogRoute } from 'components/Dialog';
import { ConnectedTable, TableActions } from 'modules/tables';
import { Link } from 'components/Link';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { DeleteAffiliatedDialog, EditAffiliatedDialog } from 'modules/companies/edit';

import styles from './styles.module.css';

export const affiliatedCompaniesColumns = (companyId: number) => () => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, item) => (
      <Link className={styles.companyLink} to={`${COMPANIES_LIST_PATH}/detail/${item.affiliatedId}`}>
        {item.name}
      </Link>
    )
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="affiliatedTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${companyId}/edit-affiliated/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/detail/${companyId}/delete-affiliated/${item.id}`
          }
        ]}
      />
    )
  }
];

interface Properties {
  companyId: number;
}

const affiliatedCompaniesTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const affiliatedCompaniesSelector = React.useCallback(
    (data: any) => {
      if (!data) {
        return [];
      }

      return data.affiliatedCompanies.value.records.map((record) => {
        const company = data.childCompanies.value.records.find((i) =>
          companyId === record.child_company_id ? i.id === record.parent_company_id : i.id === record.child_company_id
        );

        return {
          id: record.id,
          affiliatedId: company?.id,
          name: company?.name || '-',
          notes: record.notes || '-'
        };
      });
    },
    [companyId]
  );

  return (
    <>
      <ConnectedTable
        sequentialFetch
        serverPagination
        menuContainerId="affiliatedTableMenuContainer"
        sectionProperties={{
          title: 'Affiliated Companies',
          actions: (
            <Link
              rounded
              button
              to={`${COMPANIES_LIST_PATH}/detail/${companyId}/add-affiliated`}
              face={Link.FACE_DEFAULT}
            >
              ADD NEW
            </Link>
          )
        }}
        columns={affiliatedCompaniesColumns(companyId)}
        storePath="company-affiliatedCompanies"
        dataSources={[
          {
            key: 'affiliatedCompanies',
            url: '/affiliated-company-list',
            handler: () => ({
              _options: {
                filters: [
                  {
                    type: 'or',
                    filters: [
                      { field: 'parent_company_id', type: 'eq', value: companyId },
                      { field: 'child_company_id', type: 'eq', value: companyId }
                    ]
                  }
                ]
              }
            })
          },
          {
            key: 'childCompanies',
            url: '/company-list',
            handler: (data) => ({
              _options: {
                filters: [
                  {
                    field: 'id',
                    type: 'in',
                    value: uniq(
                      data.affiliatedCompanies.value.records
                        .map((i) => i.child_company_id)
                        .concat(data.affiliatedCompanies.value.records.map((i) => i.parent_company_id))
                    )
                  }
                ]
              }
            })
          }
        ]}
        dataSourceSelector={affiliatedCompaniesSelector}
      />
      <Switch>
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/add-affiliated`}
          component={EditAffiliatedDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Add Affiliated Company"
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/edit-affiliated/:affiliatedId`}
          component={EditAffiliatedDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Edit Affiliated Company"
        />
        <DialogRoute
          path={`${COMPANIES_LIST_PATH}/detail/:id/delete-affiliated/:affiliatedId`}
          component={DeleteAffiliatedDialog}
          closePath={`${COMPANIES_LIST_PATH}/detail/${companyId}`}
          dialog-title="Delete Affiliated Company"
        />
      </Switch>
    </>
  );
});

export { affiliatedCompaniesTable as AffiliatedCompaniesTable };

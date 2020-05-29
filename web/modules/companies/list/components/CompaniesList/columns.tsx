import * as React from 'react';
import { Link } from 'components/Link';
import { BusinessTypeLabel, CustomerStatusLabel, EntityTypeLabel } from 'components/Labels';
import { CheckMark } from 'components/CheckBox';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { TableActions } from 'modules/tables';
import { COMPANIES_LIST_PATH } from '../../constants';

import * as styles from './styles.module.css';

export const columns = () => [
  {
    title: 'Account Name',
    dataIndex: 'name',
    key: 'name',
    render: (name, item) => (
      <Link className={styles.nameLink} to={`${COMPANIES_LIST_PATH}/detail/${item.id}`}>
        {name}
      </Link>
    )
  },
  {
    align: 'center',
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    align: 'center',
    title: 'DBA',
    dataIndex: 'dba',
    key: 'dba'
  },
  {
    align: 'center',
    title: 'Active',
    dataIndex: 'active',
    key: 'active',
    render: (active) => (active ? <CheckMark checked={active} rounded size={CheckMark.SIZE_SMALL} /> : null)
  },
  {
    align: 'center',
    title: 'Customer Status',
    dataIndex: 'customer_status',
    key: 'customer_status',
    render: (status) => <CustomerStatusLabel name={status} />
  },
  {
    align: 'center',
    title: 'Entity Type',
    dataIndex: 'entity_type',
    key: 'entity_type',
    render: (type) => <EntityTypeLabel name={type} />
  },
  {
    align: 'center',
    title: 'Business Type',
    dataIndex: 'business_type',
    key: 'business_type',
    render: (type) => <BusinessTypeLabel name={type} />
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="companiesTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${COMPANIES_LIST_PATH}/edit/${item.id}`
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

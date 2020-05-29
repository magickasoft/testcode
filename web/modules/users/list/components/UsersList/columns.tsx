import * as React from 'react';
import { TableActions } from 'modules/tables';
import { CheckMark } from 'components/CheckBox';
import { DateTime } from 'components/DateTime';
import { Permissions } from 'components/Permissions';
import { MenuItemTextFace, MenuItemType } from 'components/DropDownMenu';
import { USERS_LIST_PAGE_PATH } from '../../constants';

import styles from './styles.module.css';

const { PERMISSIONS, PERMISSION_ADMIN } = Permissions;

const permissionsMap = new Map([...PERMISSIONS, PERMISSION_ADMIN].reverse().map((item) => [item.value, item.label]));

export const columns = () => [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    align: 'center',
    render: (firstName, item) => <span className={item.active ? '' : styles.inactive}>{firstName}</span>
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    align: 'center',
    render: (lastName, item) => <span className={item.active ? '' : styles.inactive}>{lastName}</span>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    render: (email, item) => <span className={item.active ? '' : styles.inactive}>{email}</span>
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
    render: (phone, item) => <span className={item.active ? '' : styles.inactive}>{phone}</span>
  },
  {
    title: 'Active',
    dataIndex: 'active',
    key: 'active',
    align: 'center',
    render: (active) => (active ? <CheckMark checked={active} rounded size={CheckMark.SIZE_SMALL} /> : null)
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: (utc, item) =>
      utc && <DateTime className={item.active ? '' : styles.inactive} utc={utc} dateFormat="YYYY/M/D" />
  },
  {
    title: 'Last Login',
    dataIndex: 'lastLogin',
    key: 'lastLogin',
    align: 'center',
    render: (utc, item) =>
      utc && <DateTime className={item.active ? '' : styles.inactive} utc={utc} dateFormat="YYYY/M/D" />
  },
  {
    title: 'Permission',
    dataIndex: 'permissions',
    key: 'permissions',
    align: 'center',
    render: (permissions, item) => (
      <span className={item.active ? '' : styles.inactive}>
        {permissions?.map((value) => permissionsMap.get(value)).join(', ')}
      </span>
    )
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="userTableMenuContainer"
        items={[
          {
            key: 1,
            title: item.lastLogin ? 'Reset Password' : 'Send Invite',
            url: `${USERS_LIST_PAGE_PATH}/${item.id}/resend-invite`
          },
          {
            key: 2,
            title: item.active ? 'Deactivate User' : 'Activate User',
            url: `${USERS_LIST_PAGE_PATH}/${item.id}/${item.active ? 'deactivate' : 'activate'}`
          },
          { key: 3, kind: MenuItemType.Divider },
          {
            key: 4,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${USERS_LIST_PAGE_PATH}/${item.id}/edit`
          }
        ]}
      />
    )
  }
];

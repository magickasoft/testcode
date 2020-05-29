import * as React from 'react';
import { Link } from 'components/Link';
import { TableActions } from 'modules/tables';
import { LicenseInfo } from 'components/License';
import { DateTime } from 'components/DateTime';
import { CheckMark } from 'components/CheckBox';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { StatusLabel } from 'components/Labels';
import { INTERNAL_TRANSFERS_LIST_PAGE_PATH } from '../../constants';

import styles from './styles.module.css';

export const columns = () => [
  {
    title: 'Transfer number',
    dataIndex: 'id',
    key: 'id',
    render: (id) => (
      <Link className={styles.nameLink} to={`${INTERNAL_TRANSFERS_LIST_PAGE_PATH}/${id}`}>
        IT-{id}
      </Link>
    )
  },
  {
    title: 'Sender',
    dataIndex: 'sender',
    key: 'sender',
    render: (sender) => <LicenseInfo name={sender.company} license={sender.license} licenseType={sender.licenseType} />
  },
  {
    title: 'Recipient',
    dataIndex: 'recipient',
    key: 'recipient',
    render: (recipient) => (
      <LicenseInfo name={recipient.company} license={recipient.license} licenseType={recipient.licenseType} />
    )
  },
  {
    title: 'Amount',
    align: 'center',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => `$ ${amount}`
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (name) => <StatusLabel name={name} />
  },
  {
    title: 'Created Date',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (createdAt) => <DateTime utc={createdAt} dateFormat="YYYY/MM/DD" />
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="transferTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${INTERNAL_TRANSFERS_LIST_PAGE_PATH}/edit/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${INTERNAL_TRANSFERS_LIST_PAGE_PATH}/edit/${item.id}/delete`
          }
        ]}
      />
    )
  }
];

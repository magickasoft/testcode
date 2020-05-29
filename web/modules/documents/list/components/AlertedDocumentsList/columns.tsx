import * as React from 'react';
import { Link } from 'components/Link';
import { DateTime } from 'components/DateTime';
import { FrequencyLabel } from 'components/Labels';
import { Icon } from 'components/Icon';
import { CheckMark } from 'components/CheckBox';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { TableActions } from 'modules/tables';
import { DOCUMENTS_LIST_PAGE_PATH } from '../../constants';

import styles from './styles.module.css';

export const columns = () => [
  {
    title: 'Document Name',
    dataIndex: 'name',
    key: 'name',
    render: (name, item) => (
      <Link className={styles.nameLink} to={`${DOCUMENTS_LIST_PAGE_PATH}/${item.id}`}>
        {name}
      </Link>
    )
  },
  {
    align: 'center',
    title: 'Internal',
    dataIndex: 'internal',
    key: 'internal ',
    render: (internal) => (internal ? <CheckMark checked rounded size={CheckMark.SIZE_SMALL} /> : null)
  },
  {
    align: 'center',
    title: 'Relationship',
    dataIndex: 'company',
    key: 'company'
  },
  {
    align: 'center',
    title: 'License',
    dataIndex: 'license',
    key: 'license'
  },
  {
    align: 'center',
    title: 'Frequency',
    dataIndex: 'frequency',
    key: 'frequency',
    render: (frequency) => <FrequencyLabel name={frequency} />
  },
  {
    align: 'center',
    title: 'Expiration Date',
    dataIndex: 'expirationDate',
    key: 'expirationDate',
    render: (date) => date && <DateTime utc={date} dateFormat="YYYY/MM/DD" />
  },
  {
    align: 'center',
    title: 'Almost Due',
    dataIndex: 'firstAlerted',
    key: 'firstAlerted',
    render: (_, item) => (
      <div className={styles.dueRow}>
        {item.firstAlerted ? (
          <span className={styles.dueCount}>
            <Icon type="exclamation-orange" size="small" /> {item.firstAlerted}
          </span>
        ) : null}
        {item.lastAlerted ? (
          <span className={styles.dueCount}>
            <Icon type="exclamation" size="small" /> {item.lastAlerted}
          </span>
        ) : null}
      </div>
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
        menuContainerId="alertedDocumentsTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${DOCUMENTS_LIST_PAGE_PATH}/${item.id}/edit`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${DOCUMENTS_LIST_PAGE_PATH}/${item.id}/edit/delete`
          }
        ]}
      />
    )
  }
];

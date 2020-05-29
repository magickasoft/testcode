import * as React from 'react';
import { Link } from 'components/Link';
import { TableActions } from 'modules/tables';
import { Chip, ChipFaces } from 'components/Chip';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { DateTime } from 'components/DateTime';

import styles from './styles.module.css';

export const columns = () => [
  {
    title: 'Period',
    dataIndex: 'period',
    key: 'period',
    render: (period, item) => (
      <Link
        className={styles.detailsLink}
        to={`${DOCUMENTS_LIST_PAGE_PATH}/${item.documentId}/period/${item.id}`}
        face={Link.FACE_SECONDARY}
      >
        {period}
      </Link>
    )
  },
  {
    title: 'Expiration Date',
    dataIndex: 'expirationDate',
    key: 'expirationDate',
    render: (date) => date && <DateTime utc={date} dateFormat="YYYY/MM/DD" />
  },
  {
    align: 'center',
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <Chip face={status === 'new' ? ChipFaces.Primary : ChipFaces.Default}>{status}</Chip>
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="documentPeriodsTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'EDIT',
            iconName: 'edit',
            iconHoverFace: 'primary',
            textFace: MenuItemTextFace.Grey,
            url: `${DOCUMENTS_LIST_PAGE_PATH}/${item.documentId}/edit-period/${item.id}`
          },
          {
            key: 2,
            title: 'DELETE',
            iconName: 'delete',
            iconHoverFace: 'danger',
            textFace: MenuItemTextFace.Grey,
            url: `${DOCUMENTS_LIST_PAGE_PATH}/${item.documentId}/delete-period/${item.id}`
          }
        ]}
      />
    )
  }
];

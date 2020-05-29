import * as React from 'react';
import moment from 'moment';
import { TableActions } from 'modules/tables';
import { Chip, ChipFaces } from 'components/Chip';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { DownloadLink } from 'components/DownloadLink';
import { DocumentFileDownloadFilterModel } from '../../models';

export const columns = (paths: { edit: string; delete: string; approve: string; reject: string }) => () => [
  {
    title: 'Filename',
    dataIndex: 'name',
    key: 'name',
    render: (name, item) => (
      <DownloadLink
        parametersForm={new DocumentFileDownloadFilterModel().setValue({ id: item.id })}
        baseUrl="/document-file-download"
      >
        {name}
      </DownloadLink>
    )
  },
  {
    align: 'center',
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <Chip face={status === 'new' ? ChipFaces.Primary : ChipFaces.Default}>{status}</Chip>
  },
  {
    align: 'center',
    title: 'Uploaded Date',
    dataIndex: 'uploadedAt',
    key: 'uploadedAt',
    render: (uploadedAt) => moment(uploadedAt).format('MM/DD/YYYY HH:mm')
  },
  {
    align: 'center',
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
        menuContainerId="PeriodFilesTableMenuContainer"
        items={
          item.status === 'new'
            ? [
                {
                  key: 1,
                  title: 'Approve',
                  url: `${paths.approve}/${item.id}`
                },
                {
                  key: 2,
                  title: 'Reject',
                  url: `${paths.reject}/${item.id}`
                }
              ]
            : [
                {
                  key: 1,
                  title: 'EDIT',
                  iconName: 'edit',
                  iconHoverFace: 'primary',
                  textFace: MenuItemTextFace.Grey,
                  url: `${paths.edit}/${item.id}`
                },
                {
                  key: 2,
                  title: 'DELETE',
                  iconName: 'delete',
                  iconHoverFace: 'danger',
                  textFace: MenuItemTextFace.Grey,
                  url: `${paths.delete}/${item.id}`
                }
              ]
        }
      />
    )
  }
];

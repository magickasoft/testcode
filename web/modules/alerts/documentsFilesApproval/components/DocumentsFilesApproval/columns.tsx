import * as React from 'react';
import moment from 'moment';
import { Link } from 'components/Link';
import { CheckMark } from 'components/CheckBox';
import { DownloadLink } from 'components/DownloadLink';
import { DocumentFileDownloadFilterModel } from 'modules/documents/details';
import { TableActions } from 'modules/tables';
import { MAIN_ALERTS_PATH } from 'modules/main';

export const columns = () => [
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
    title: 'Document Name',
    dataIndex: 'documentName',
    key: 'documentName'
  },
  {
    align: 'center',
    title: 'Relationship',
    dataIndex: 'companyName',
    key: 'companyName'
  },
  {
    align: 'center',
    title: 'License',
    dataIndex: 'licenseName',
    key: 'licenseName'
  },
  {
    align: 'center',
    title: 'Uploaded Date',
    dataIndex: 'uploadedAt',
    key: 'uploadedAt',
    render: (uploadedAt) => moment(uploadedAt).format('MM/DD/YYYY HH:mm')
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '50px',
    render: (_, item) => (
      <TableActions
        menuContainerId="documentsFilesApprovalTableMenuContainer"
        items={[
          {
            key: 1,
            title: 'Approve',
            url: `${MAIN_ALERTS_PATH}/approve-file/${item.id}`
          },
          {
            key: 2,
            title: 'Reject',
            url: `${MAIN_ALERTS_PATH}/reject-file/${item.id}`
          }
        ]}
      />
    )
  }
];

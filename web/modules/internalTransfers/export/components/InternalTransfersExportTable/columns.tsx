import * as React from 'react';
import { Link } from 'components/Link';
import { TableActions } from 'modules/tables';
import { LicenseInfo } from 'components/License';
import { CheckMark } from 'components/CheckBox';
import { DownloadLink } from 'components/DownloadLink';
import { MenuItemTextFace } from 'components/DropDownMenu';
import { InternalTransferExportStatusLabel } from 'components/Labels';
import { DateTime } from 'components/DateTime';
import { INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH } from '../../constants';
import { ExportFileDownloadFilterModel } from '../../models';

const getClearFilename = (name: string) => {
  const split = name.split('/');
  return split.reverse()[0];
};

export const columns = () => [
  {
    title: 'Credit File',
    dataIndex: 'creditFileS3Key',
    key: 'creditFileS3Key',
    render: (creditFileS3Key, item) => (
      <DownloadLink
        parametersForm={new ExportFileDownloadFilterModel().setValue({
          internal_transfers_export_id: item.id,
          file_type: 'credit'
        })}
        baseUrl="/internal-transfers-export-file-download"
      >
        {getClearFilename(creditFileS3Key)}
      </DownloadLink>
    )
  },
  {
    title: 'Debit File',
    dataIndex: 'debitFileS3Key',
    key: 'debitFileS3Key',
    render: (debitFileS3Key, item) => (
      <DownloadLink
        parametersForm={new ExportFileDownloadFilterModel().setValue({
          internal_transfers_export_id: item.id,
          file_type: 'debit'
        })}
        baseUrl="/internal-transfers-export-file-download"
      >
        {getClearFilename(debitFileS3Key)}
      </DownloadLink>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (status) => <InternalTransferExportStatusLabel name={status} />
  },
  {
    title: 'Created Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: (date) => <DateTime utc={date} dateFormat="YYYY/MM/DD" />
  },
  {
    title: 'Processed Date',
    dataIndex: 'processedAt',
    key: 'processedAt',
    align: 'center',
    render: (date) => (date ? <DateTime utc={date} dateFormat="YYYY/MM/DD" /> : null)
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    width: '80px',
    render: (_, item) =>
      item.status === 'new' ? (
        <TableActions
          menuContainerId="transferTableMenuContainer"
          items={[
            {
              key: 1,
              title: 'PROCESS',
              url: `${INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH}/process/${item.id}`,
              textFace: MenuItemTextFace.Grey
            }
          ]}
        />
      ) : null
  }
];

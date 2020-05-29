import * as React from 'react';
import { Page } from 'components/Page';
import { EntityHistory, HistoryEntityType } from 'modules/history';
import { Information } from './components/Information';
import { Files } from '../Files';

interface Properties {
  isPending: boolean;
  document: any;
  company: any;
  license: any;
  period: any;
  children?: React.ReactNode;
  onUploadPeriodFile: (periodId: number, file: File[]) => any;
  editFileBasePath: string;
  deleteFileBasePath: string;
  approveFileBasePath: string;
  rejectFileBasePath: string;
  closeDialogPath: string;
}

export const PeriodDetails = React.memo((properties: Properties) => {
  const {
    isPending,
    period,
    document,
    company,
    license,
    children,
    onUploadPeriodFile,
    editFileBasePath,
    deleteFileBasePath,
    approveFileBasePath,
    rejectFileBasePath,
    closeDialogPath
  } = properties;

  return (
    <Page isPending={isPending} title="Document" face={Page.FACE_SECONDARY} subTitle={document?.name || '-'}>
      <Information document={document} company={company} license={license} period={period} />
      {period?.id && (
        <Files
          periodId={period?.id}
          onUpload={onUploadPeriodFile}
          deleteFileBasePath={deleteFileBasePath}
          editFileBasePath={editFileBasePath}
          approveFileBasePath={approveFileBasePath}
          rejectFileBasePath={rejectFileBasePath}
          closeDialogPath={closeDialogPath}
        />
      )}
      {period?.id && (
        <EntityHistory
          id={period.id}
          type={HistoryEntityType.DocumentPeriod}
          sectionProperties={{ title: 'Document Period history' }}
        />
      )}
      {children}
    </Page>
  );
});

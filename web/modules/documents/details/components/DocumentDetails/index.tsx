import * as React from 'react';
import { Page } from 'components/Page';
import { EntityHistory, HistoryEntityType } from 'modules/history';
import { Information } from './components/Information';
import { Periods } from './components/Periods';
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

export const DocumentDetails = React.memo((properties: Properties) => {
  const {
    isPending,
    document,
    company,
    license,
    period,
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
      {document?.id && document?.frequency !== 'one-time' && <Periods documentId={document.id} />}
      {document?.frequency === 'one-time' && period?.id && (
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
      {document?.id && (
        <EntityHistory
          id={document.id}
          type={HistoryEntityType.Document}
          sectionProperties={{ title: 'Document History' }}
        />
      )}
      {children}
    </Page>
  );
});

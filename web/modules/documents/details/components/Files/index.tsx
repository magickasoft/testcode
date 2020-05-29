import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Switch } from 'react-router-dom';
import { PageSection } from 'components/Page';
import { DialogRoute } from 'components/Dialog';
import { Link } from 'components/Link';
import { useDispatch } from 'react-redux';
import { ConnectedTable, forceTableUpdate } from 'modules/tables';
import { DeleteDocumentFileDialog } from 'modules/documents/delete/containers';
import {
  ApproveDocumentFileDialog,
  EditDocumentFileDialog,
  RejectDocumentFileDialog
} from 'modules/documents/edit/containers';
import { columns } from './columns';
import { selector } from './selector';

interface Properties {
  periodId: number;
  onUpload: (periodId: number, file: File[]) => any;
  editFileBasePath: string;
  deleteFileBasePath: string;
  approveFileBasePath: string;
  rejectFileBasePath: string;
  closeDialogPath: string;
}

export const Files = React.memo((properties: Properties) => {
  const dispatch = useDispatch();

  const {
    periodId,
    onUpload,
    editFileBasePath,
    deleteFileBasePath,
    approveFileBasePath,
    rejectFileBasePath,
    closeDialogPath
  } = properties;

  React.useEffect(() => {
    dispatch(forceTableUpdate('documents-period-files'));
  }, [periodId]);

  const dataSource = [
    {
      key: 'files',
      url: '/document-file-list',
      handler: () => ({
        _options: {
          filters: [
            {
              field: 'document_period_id',
              type: 'eq',
              value: periodId
            }
          ],
          orders: [{ field: 'created_at', direction: 'DESC' }]
        }
      })
    }
  ];

  const renderActions = React.useCallback(
    () => (
      <Dropzone onDrop={(acceptedFiles) => onUpload(periodId, acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <Link {...getRootProps()} button rounded to="#" face={Link.FACE_DEFAULT}>
            Upload
            <input {...getInputProps()} />
          </Link>
        )}
      </Dropzone>
    ),
    [periodId]
  );

  return (
    <PageSection face={PageSection.FACE_SECONDARY} title="Files" actions={renderActions()}>
      <ConnectedTable
        serverPagination
        columns={columns({
          edit: editFileBasePath,
          delete: deleteFileBasePath,
          approve: approveFileBasePath,
          reject: rejectFileBasePath
        })}
        menuContainerId="PeriodFilesTableMenuContainer"
        storePath="documents-period-files"
        dataSources={dataSource}
        dataSourceSelector={selector}
      />
      <Switch>
        <DialogRoute
          path={`${editFileBasePath}/:fileId`}
          component={(props: any) => (
            <EditDocumentFileDialog
              {...{
                ...props,
                deletePath: `${deleteFileBasePath}/${props.match.params.fileId}`
              }}
            />
          )}
          closePath={closeDialogPath}
          dialog-title="Edit File"
        />
        <DialogRoute
          path={`${editFileBasePath}/:fileId`}
          component={(props: any) => (
            <EditDocumentFileDialog
              {...{
                ...props,
                deletePath: `${deleteFileBasePath}/${props.match.params.fileId}`
              }}
            />
          )}
          closePath={closeDialogPath}
          dialog-title="Edit File"
        />
        <DialogRoute
          path={`${deleteFileBasePath}/:fileId`}
          component={DeleteDocumentFileDialog}
          closePath={closeDialogPath}
          dialog-title="Approve Period"
        />
        <DialogRoute
          path={`${approveFileBasePath}/:fileId`}
          component={ApproveDocumentFileDialog}
          closePath={closeDialogPath}
          dialog-title="Approve File"
        />
        <DialogRoute
          path={`${rejectFileBasePath}/:fileId`}
          component={RejectDocumentFileDialog}
          closePath={closeDialogPath}
          dialog-title="Reject File"
        />
      </Switch>
    </PageSection>
  );
});

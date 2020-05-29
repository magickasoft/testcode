import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN_ALERTS_PATH } from 'modules/main';
import { DialogRoute } from 'components/Dialog';
import { ApproveDocumentFileDialog, RejectDocumentFileDialog } from 'modules/documents/edit/containers';
import { DocumentsFilesApproval } from './components/DocumentsFilesApproval';

export const DocumentsFilesApprovalTable = React.memo(() => (
  <>
    <DocumentsFilesApproval
      sectionProperties={{ title: 'Documents Files Approval' }}
      layerProperties={{ rounded: true, shadowed: true }}
    />
    <Switch>
      <DialogRoute
        path={`${MAIN_ALERTS_PATH}/approve-file/:fileId`}
        component={ApproveDocumentFileDialog}
        closePath={MAIN_ALERTS_PATH}
        dialog-title="Approve File"
      />
      <DialogRoute
        path={`${MAIN_ALERTS_PATH}/reject-file/:fileId`}
        component={RejectDocumentFileDialog}
        closePath={MAIN_ALERTS_PATH}
        dialog-title="Reject File"
      />
    </Switch>
  </>
));

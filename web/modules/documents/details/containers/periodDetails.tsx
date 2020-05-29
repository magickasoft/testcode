import * as React from 'react';
import { DialogRoute } from 'components/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, RouterComponentProps } from 'react-router-dom';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { documentPeriodUploadActions, EditDocumentPeriodDialog } from 'modules/documents/edit';
import { DocumentsDetailsFilterModel } from 'modules/documents/details/models';
import { documentsDetailsActions } from 'modules/documents/details/actions';
import { documentsDetailsSelector, documentPeriodsSelector } from 'modules/documents/details/selectors';
import { licenseDetailsSelector } from 'modules/licenses/details';
import { companyDetailsSelectors } from 'modules/companies/details';
import { ApproveDialog } from 'modules/documents/details/containers/approve';
import { DeleteDocumentPeriodDialog } from 'modules/documents/delete';
import { DOCUMENTS_DETAILS_PAGE_PATH } from '../constants';
import { PeriodDetails } from '../components/PeriodDetails';

const details = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();

  const {
    match: {
      params: { id, periodId }
    }
  } = properties;

  const documentEntity = useSelector(documentsDetailsSelector.getEntity);
  const plainDocument = documentEntity.getValue()[0] || {};
  const periods = useSelector(documentPeriodsSelector.getEntity);
  const period =
    periods && Array.isArray(periods.getValue()) ? periods.getValue().find((i) => +i.id === +periodId) : {};
  const company = useSelector(companyDetailsSelectors.getEntity);
  const license = useSelector(licenseDetailsSelector.getEntity).details;

  const loadData = React.useCallback(() => {
    dispatch(documentsDetailsActions.read.call(new DocumentsDetailsFilterModel().setValue({ id: +id })));
  }, [id]);

  const uploadPeriodFile = React.useCallback((periodId: number, files: File[]) => {
    const form = new FormData();
    form.append('period_id', periodId.toString());
    form.append('document', files[0]);
    dispatch(documentPeriodUploadActions.upload.call(form));
  }, []);

  React.useEffect(() => loadData(), [id]);

  return (
    <PeriodDetails
      isPending={periods.isPending()}
      period={period}
      document={plainDocument}
      company={company.getValue()[0] || {}}
      license={license.getValue()[0] || {}}
      onUploadPeriodFile={uploadPeriodFile}
      editFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/period/${periodId}/edit-period-file`}
      deleteFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/period/${periodId}/delete-period-file`}
      approveFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/period/${periodId}/approve-period-file`}
      rejectFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/period/${periodId}/reject-period-file`}
      closeDialogPath={`${DOCUMENTS_LIST_PAGE_PATH}/${id}/period/${periodId}/`}
    >
      <Switch>
        <DialogRoute
          path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/period/:periodId/approve`}
          component={ApproveDialog}
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${plainDocument.id}/period/${periodId}`}
          dialog-title="Approve Period"
        />
        <DialogRoute
          path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/period/:periodId/delete`}
          component={DeleteDocumentPeriodDialog}
          dialog-title="Delete Document Period"
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${plainDocument.id}/period/${periodId}`}
        />
        <DialogRoute
          path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/period/:periodId/edit`}
          component={(props) => (
            <EditDocumentPeriodDialog
              {...{
                ...props,
                deletePath: `${DOCUMENTS_DETAILS_PAGE_PATH}/${plainDocument.id}/period/${periodId}/delete`
              }}
            />
          )}
          dialog-title="Edit Document Period"
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${plainDocument.id}/period/${periodId}`}
        />
      </Switch>
    </PeriodDetails>
  );
};

export const documentPeriodDetailsRoute = (
  <Route path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/period/:periodId`} component={details} />
);

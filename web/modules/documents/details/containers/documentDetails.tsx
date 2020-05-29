import * as React from 'react';
import { DialogRoute } from 'components/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import { companyDetailsSelectors } from 'modules/companies/details';
import { licenseDetailsSelector } from 'modules/licenses/details';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { documentPeriodUploadActions, EditDocumentPeriodDialog } from 'modules/documents/edit';
import { DeleteDocumentPeriodDialog } from 'modules/documents/delete';
import { documentPeriodsSelector, documentsDetailsSelector } from '../selectors';
import { documentsDetailsActions } from '../actions';
import { DocumentsDetailsFilterModel } from '../models';
import { DOCUMENTS_DETAILS_PAGE_PATH } from '../constants';
import { DocumentDetails } from '../components/DocumentDetails';
import { ApproveDialog } from './approve';

const details = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();

  const {
    match: {
      params: { id }
    }
  } = properties;

  const document = useSelector(documentsDetailsSelector.getEntity);
  const period = useSelector(documentPeriodsSelector.getEntity);
  const company = useSelector(companyDetailsSelectors.getEntity);
  const license = useSelector(licenseDetailsSelector.getEntity).details;
  const plainDocument = document && Array.isArray(document.getValue()) ? document.getValue()[0] : {};
  const plainPeriod = period && Array.isArray(period.getValue()) ? period.getValue()[0] : {};
  const plainCompany = company && Array.isArray(company.getValue()) ? company.getValue()[0] : {};
  const plainLicense = license && Array.isArray(license.getValue()) ? license.getValue()[0] : {};

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
    <DocumentDetails
      isPending={document.isPending()}
      document={plainDocument}
      company={plainCompany}
      license={plainLicense}
      period={plainPeriod}
      onUploadPeriodFile={uploadPeriodFile}
      editFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/edit-period-file`}
      deleteFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/delete-period-file`}
      approveFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/approve-period-file`}
      rejectFileBasePath={`${DOCUMENTS_DETAILS_PAGE_PATH}/${id}/reject-period-file`}
      closeDialogPath={`${DOCUMENTS_LIST_PAGE_PATH}/${id}`}
    >
      <Switch>
        <DialogRoute
          path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/approve-period`}
          component={ApproveDialog}
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${plainDocument.id}`}
          dialog-title="Approve Period"
        />
        <DialogRoute
          path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/delete-period/:periodId`}
          component={DeleteDocumentPeriodDialog}
          dialog-title="Delete Document Period"
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${plainDocument.id}`}
        />
        <DialogRoute
          path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/add-period`}
          component={EditDocumentPeriodDialog}
          dialog-title="Add New Period"
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${plainDocument.id}`}
        />
        <DialogRoute
          path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id/edit-period/:periodId`}
          component={(props) => (
            <EditDocumentPeriodDialog
              {...{
                ...props,
                deletePath: `${DOCUMENTS_DETAILS_PAGE_PATH}/${plainDocument.id}/delete-period/${plainPeriod?.id}`
              }}
            />
          )}
          dialog-title="Edit Document Period"
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${plainDocument.id}`}
        />
      </Switch>
    </DocumentDetails>
  );
};

export const documentsDetailsRoute = <Route path={`${DOCUMENTS_DETAILS_PAGE_PATH}/:id`} component={details} />;

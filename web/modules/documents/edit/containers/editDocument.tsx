import * as React from 'react';
import * as UrlParse from 'url-parse';
import { DialogRoute } from 'components/Dialog';
import { push } from 'modules/router/effects';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import {
  documentPeriodsSelector,
  documentsDetailsActions,
  DocumentsDetailsFilterModel
} from 'modules/documents/details';
import { companyDetailsActions, CompanyDetailsModel, companyDetailsSelectors } from 'modules/companies/details';
import { licenseDetailsActions, LicenseDetailsFilterModel, licenseDetailsSelector } from 'modules/licenses/details';
import { licenseListSelectors } from 'modules/licenses/list';
import { DeleteDocumentContainer } from 'modules/documents/delete';
import { documentFormSelector } from '../selectors';
import { documentFormActions, documentPeriodFormActions } from '../actions';
import { DocumentFormModel, DocumentPeriodFormModel } from '../models';
import { EditDocumentForm } from '../components/EditDocumentForm';

const edit = (properties: RouterComponentProps) => {
  const parsedUrl = UrlParse.default(window.location.href, true);
  const licenseId = +parsedUrl.query.licenseId;
  const companyId = +parsedUrl.query.companyId;
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const value = useSelector(documentFormSelector.getEntity);
  const plainValue = value.getValue();
  const periods = useSelector(documentPeriodsSelector.getEntity);
  const period = periods.getValue()[0];
  const company = useSelector(companyDetailsSelectors.getEntity);
  const license = useSelector(licenseDetailsSelector.getEntity);
  const licenses = useSelector(licenseListSelectors.getEntity);

  React.useEffect(() => {
    if (+id) {
      dispatch(documentsDetailsActions.read.call(new DocumentsDetailsFilterModel().setValue({ id: +id })));
    } else {
      dispatch(
        documentFormActions.value.set(
          new DocumentFormModel().setValue({
            license_id: licenseId || null,
            company_id: companyId || null
          })
        )
      );
    }
  }, []);

  React.useEffect(() => {
    if (+id) {
      dispatch(
        documentFormActions.value.set(
          value.setValue({
            ...plainValue,
            status: period?.status,
            notes: period?.notes
          })
        )
      );
    }
  }, [periods]);

  React.useEffect(() => {
    const plain = value.getValue();

    if (plain.company_id) {
      dispatch(companyDetailsActions.read.call(new CompanyDetailsModel().setValue({ id: plain.company_id })));
    }
    if (plain.license_id) {
      dispatch(licenseDetailsActions.read.call(new LicenseDetailsFilterModel().setValue({ id: plain.license_id })));
    }
  }, [value]);

  const onChange = React.useCallback(
    (form) => {
      const plainForm = form.getValue();

      if (!plainValue.company_id && !!plainForm.company_id) {
        plainForm.license_id = null;
      }
      if (!plainValue.license_id && !!plainForm.license_id) {
        plainForm.company_id = null;
      }

      dispatch(documentFormActions.value.set(form.setValue(plainForm)));
    },
    [plainValue]
  );

  const onSubmit = React.useCallback(() => {
    dispatch(documentFormActions.write.call(value));

    if (plainValue.id && plainValue.frequency === 'one-time') {
      dispatch(
        documentPeriodFormActions.write.call(
          new DocumentPeriodFormModel().setValue({
            ...period,
            status: plainValue.status,
            notes: plainValue.notes
          })
        )
      );
    }
  }, [value]);

  const onCancel = React.useCallback(() => push(`${DOCUMENTS_LIST_PAGE_PATH}${id ? `/${id}` : ''}`), [value]);

  const onDelete = React.useCallback(() => push(`${DOCUMENTS_LIST_PAGE_PATH}/${id}/edit/delete`), [value]);

  return (
    <EditDocumentForm
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={onDelete}
      companyName={company.getValue()[0]?.name}
      licenseName={license.details.getValue()[0]?.name}
      hasMultiplePeriods={periods.getValue().length > 1}
      licenses={licenses}
    >
      <Switch>
        <DialogRoute
          path={`${DOCUMENTS_LIST_PAGE_PATH}/:id/edit/delete`}
          component={DeleteDocumentContainer}
          closePath={`${DOCUMENTS_LIST_PAGE_PATH}/${id}/edit`}
          dialog-title="Delete Document Page"
        />
      </Switch>
    </EditDocumentForm>
  );
};

export const editDocumentRoute = <Route path={`${DOCUMENTS_LIST_PAGE_PATH}/:id/edit`} component={edit} />;

export const addDocumentRoute = <Route path={`${DOCUMENTS_LIST_PAGE_PATH}/add`} component={edit} />;

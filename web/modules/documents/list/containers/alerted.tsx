import * as React from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from 'components/Page';
import { forceTableUpdate } from 'modules/tables';
import { getFilterFromQuery } from 'utils/queryFilter';
import { appSettingsSelectors, appSettingsListActions } from 'modules/appSettings';
import { AlertedDocumentsList } from 'modules/documents/list';
import { Actions } from '../components/AlertedDocumentsList/components/Actions';
import { DOCUMENTS_LIST_PAGE_PATH } from '../constants';

const DocumentsListPage = React.memo(() => {
  const dispatch = useDispatch();
  const settings = useSelector(appSettingsSelectors.getValue);

  React.useEffect(() => {
    dispatch(appSettingsListActions.read.call());
    dispatch(forceTableUpdate('alerted-documents', true));
  }, []);

  React.useCallback(() => {
    dispatch(forceTableUpdate('alerted-documents', true));
  }, [settings]);

  return (
    <Page title="Documents" actions={<Actions />}>
      <AlertedDocumentsList
        initialFilter={getFilterFromQuery()}
        layerProperties={{ rounded: true, shadowed: true }}
        firstAlert={settings.bank_document_first_notification_before_expiration}
        lastAlert={settings.bank_document_last_notification_before_expiration}
      />
    </Page>
  );
});

export const alertedDocumentsListRoute = <Route path={DOCUMENTS_LIST_PAGE_PATH} component={DocumentsListPage} />;

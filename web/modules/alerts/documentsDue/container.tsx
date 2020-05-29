import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appSettingsSelectors, appSettingsListActions } from 'modules/appSettings';
import { documentsDueActions } from './actions';
import { DocumentsDueFilterModel } from './models';
import { documentsDueSelector } from './selectors';
import { DocumentsDue } from './components/DocumentsDue';

export const DocumentsDueSection = React.memo(() => {
  const dispatch = useDispatch();
  const documents = useSelector(documentsDueSelector.getValue);
  const settings = useSelector(appSettingsSelectors.getValue);

  React.useEffect(() => {
    dispatch(appSettingsListActions.read.call());
    dispatch(documentsDueActions.read.call(new DocumentsDueFilterModel()));
  }, []);

  return (
    <DocumentsDue
      items={documents}
      firstAlert={settings.bank_document_first_notification_before_expiration}
      lastAlert={settings.bank_document_last_notification_before_expiration}
    />
  );
});

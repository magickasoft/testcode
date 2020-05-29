import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from 'components/Page';
import { DialogRoute } from 'components/Dialog';
import { forceTableUpdate } from 'modules/tables';
import { INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH } from 'modules/internalTransfers/export/constants';
import { ProcessExportDialog } from 'modules/internalTransfers/export/containers/process';
import { InternalTransfersExportTable } from 'modules/internalTransfers/export/components/InternalTransfersExportTable';
import { InternalTransfersTable } from './components/InternalTransfersTable';
import { INTERNAL_TRANSFERS_LIST_PAGE_PATH } from './constants';

const InternalTransfersListPage = React.memo(() => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(forceTableUpdate('internal-transfers', true));
    dispatch(forceTableUpdate('internal-transfers-export', true));
  }, []);

  return (
    <Page title="Internal Transfers">
      <InternalTransfersExportTable />
      <Switch>
        <DialogRoute
          path={`${INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH}/process/:exportId`}
          component={ProcessExportDialog}
          closePath={INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH}
          dialog-title="Process Export"
        />
      </Switch>
      <InternalTransfersTable />
    </Page>
  );
});

export const internalTransferListRoute = (
  <Route path={INTERNAL_TRANSFERS_LIST_PAGE_PATH} component={InternalTransfersListPage} />
);

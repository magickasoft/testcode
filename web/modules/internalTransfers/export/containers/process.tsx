import * as React from 'react';
import { RouterComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'modules/router/effects';
import { ProcessExportForm } from '../components/ProcessExportForm';
import { internalTransfersExportFormSelector } from '../selectors';
import { internalTransfersExportDetailsActions, internalTransfersExportFormActions } from '../actions';
import { INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH } from '../constants';
import { InternalTransfersExportFilterModel } from '../models';

export const ProcessExportDialog = React.memo((properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { exportId }
    }
  } = properties;
  const value = useSelector(internalTransfersExportFormSelector.getEntity);

  React.useEffect(() => {
    dispatch(
      internalTransfersExportDetailsActions.read.call(
        new InternalTransfersExportFilterModel().setValue({ id: +exportId })
      )
    );
  }, []);

  const onSubmit = React.useCallback(() => {
    const plain = value.getValue();
    dispatch(
      internalTransfersExportFormActions.write.call(
        value.setValue({
          ...plain,
          status: 'processed'
        })
      )
    );
  }, [value]);

  const onCancel = React.useCallback(() => push(INTERNAL_TRANSFERS_EXPORT_LIST_PAGE_PATH), [value]);

  return <ProcessExportForm value={value} onSubmit={onSubmit} onCancel={onCancel} />;
});

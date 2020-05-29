import * as React from 'react';
import { DeleteReportContainer, INVOICE_SUBMITTAL_DELETION_PATH } from 'modules/invoiceSubmittal/delete';
import { Dialog, DialogRoute } from 'components/Dialog';
import { push } from 'modules/router/effects';
import { MAIN_PATH } from 'modules/main';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import { addPrefix } from 'utils/common';
import {
  InvoiceSubmittalDetailsModel,
  invoiceSubmittalDetailsSelectors,
  invoiceSubmittalDetailsActions
} from 'modules/invoiceSubmittal/details';
import { INVOICE_SUBMITTAL_ADD_PATH, INVOICE_SUBMITTAL_EDIT_PATH } from './constants';
import { invoiceSubmittalFormSelector } from './selectors';
import { invoiceSubmittalEditActions } from './actions';
import { EditInvoiceSubmittalForm } from './components/EditInvoiceSubmittalForm';

const container = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const analytics = useSelector(invoiceSubmittalDetailsSelectors.getEntity).getValue();
  const value = useSelector(invoiceSubmittalFormSelector.getEntity);

  React.useEffect(() => {
    dispatch(invoiceSubmittalDetailsActions.read.call(new InvoiceSubmittalDetailsModel().setValue({ id: +id })));
  }, []);

  const onChange = React.useCallback((value) => dispatch(invoiceSubmittalEditActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => {
    dispatch(invoiceSubmittalEditActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(`${MAIN_PATH}/invoiceSubmittal/details/${id}`), [value]);

  const onDelete = React.useCallback(() => push(`${MAIN_PATH}/invoiceSubmittal/edit/${id}/delete`), [value]);

  return (
    <EditInvoiceSubmittalForm
      name={Array.isArray(analytics) ? addPrefix('IS')(analytics[0].id || '--') : ''}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={onDelete}
    >
      <Switch>
        <DialogRoute
          path={INVOICE_SUBMITTAL_DELETION_PATH}
          component={DeleteReportContainer}
          closePath={`${MAIN_PATH}/invoiceSubmittal/edit/${id}`}
          dialog-face={Dialog.FACE_SECONDARY}
        />
      </Switch>
    </EditInvoiceSubmittalForm>
  );
};

export const addInvoiceSubmittalRoute = <Route path={INVOICE_SUBMITTAL_ADD_PATH} component={container} />;
export const editInvoiceSubmittalRoute = <Route path={INVOICE_SUBMITTAL_EDIT_PATH} component={container} />;

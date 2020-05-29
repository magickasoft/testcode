import * as React from 'react';
import { DeleteReportContainer, TAX_RECONCILLIATION_DELETION_PATH } from 'modules/alerts/taxReconcilliation/delete';
import { Dialog, DialogRoute } from 'components/Dialog';
import { push } from 'modules/router/effects';
import { MAIN_PATH } from 'modules/main';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import { addPrefix } from 'utils/common';
import {
  TaxReconcilliationAnalyticsModel,
  taxReconcilliationAnalyticsSelectors,
  taxReconcilliationAnalyticsActions
} from 'modules/alerts/taxReconcilliation/analytics';
import { TAX_RECONCILLIATION_ADD_PATH, TAX_RECONCILLIATION_EDIT_PATH } from './constants';
import { taxReconcilliationFormSelector } from './selectors';
import { taxReconcilliationEditActions } from './actions';
import { EditTaxReconcilliationForm } from './components/EditTaxReconcilliationForm';

const container = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const analytics = useSelector(taxReconcilliationAnalyticsSelectors.getEntity).getValue();
  const value = useSelector(taxReconcilliationFormSelector.getEntity);

  React.useEffect(() => {
    dispatch(
      taxReconcilliationAnalyticsActions.read.call(new TaxReconcilliationAnalyticsModel().setValue({ id: +id }))
    );
  }, []);

  const onChange = React.useCallback((value) => dispatch(taxReconcilliationEditActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => {
    dispatch(taxReconcilliationEditActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(`${MAIN_PATH}/taxReconcilliation/analytics/${id}`), [value]);

  const onDelete = React.useCallback(() => push(`${MAIN_PATH}/taxReconcilliation/edit/${id}/delete`), [value]);

  return (
    <EditTaxReconcilliationForm
      name={Array.isArray(analytics) ? addPrefix('TR')(analytics[0].id || '--') : ''}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={onDelete}
    >
      <Switch>
        <DialogRoute
          path={TAX_RECONCILLIATION_DELETION_PATH}
          component={DeleteReportContainer}
          closePath={`${MAIN_PATH}/taxReconcilliation/edit/${id}`}
          dialog-face={Dialog.FACE_SECONDARY}
        />
      </Switch>
    </EditTaxReconcilliationForm>
  );
};

export const addTaxReconcilliationRoute = <Route path={TAX_RECONCILLIATION_ADD_PATH} component={container} />;
export const editTaxReconcilliationRoute = <Route path={TAX_RECONCILLIATION_EDIT_PATH} component={container} />;

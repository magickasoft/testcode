import * as React from 'react';
import { DeleteReportContainer, WHOLESALE_DELETION_PATH } from 'modules/alerts/wholesaleReports/delete';
import { Dialog, DialogRoute } from 'components/Dialog';
import { push } from 'modules/router/effects';
import { MAIN_PATH } from 'modules/main';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import { addPrefix } from 'utils/common';
import {
  WholesaleAnalyticsModel,
  wholesaleAnalyticsSelectors,
  wholesaleAnalyticsActions
} from 'modules/alerts/wholesaleReports/analytics';
import { licenseListSelectors } from 'modules/licenses/list';
import { WHOLESALE_ADD_PATH, WHOLESALE_EDIT_PATH } from './constants';
import { wholesaleFormSelector } from './selectors';
import { wholesaleEditActions } from './actions';
import { EditWholesaleForm } from './components/EditWholesaleForm';

const container = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const analytics = useSelector(wholesaleAnalyticsSelectors.getEntity).getValue();
  const value = useSelector(wholesaleFormSelector.getEntity);
  const allLicenses = useSelector(licenseListSelectors.getValue);

  const license = React.useMemo(() => allLicenses.find((i) => i.id === value.getValue()?.license_id) || {}, [
    value,
    allLicenses
  ]);

  React.useEffect(() => {
    dispatch(wholesaleAnalyticsActions.read.call(new WholesaleAnalyticsModel().setValue({ id: +id })));
  }, []);

  const onChange = React.useCallback((value) => dispatch(wholesaleEditActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => {
    dispatch(wholesaleEditActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(`${MAIN_PATH}/wholesale/analytics/${id}`), [value]);

  const onDelete = React.useCallback(() => push(`${MAIN_PATH}/wholesale/edit/${id}/delete`), [value]);

  return (
    <EditWholesaleForm
      license={license}
      name={Array.isArray(analytics) ? addPrefix('WR')(analytics[0].id || '--') : ''}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={onDelete}
    >
      <Switch>
        <DialogRoute
          path={WHOLESALE_DELETION_PATH}
          component={DeleteReportContainer}
          closePath={`${MAIN_PATH}/wholesale/edit/${id}`}
          dialog-face={Dialog.FACE_SECONDARY}
        />
      </Switch>
    </EditWholesaleForm>
  );
};

export const addWholesaleRoute = <Route path={WHOLESALE_ADD_PATH} component={container} />;
export const editWholesaleRoute = <Route path={WHOLESALE_EDIT_PATH} component={container} />;

import * as React from 'react';
import { DeleteReportContainer, RETAIL_DELETION_PATH } from 'modules/alerts/retailReports/delete';
import { Dialog, DialogRoute } from 'components/Dialog';
import { push } from 'modules/router/effects';
import { MAIN_PATH } from 'modules/main';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterComponentProps, Switch } from 'react-router-dom';
import { addPrefix } from 'utils/common';
import { authOrgSettingSelector } from 'modules/auth/selectors';
import {
  RetailAnalyticsModel,
  retailAnalyticsSelectors,
  retailAnalyticsActions
} from 'modules/alerts/retailReports/analytics';
import { licenseListSelectors } from 'modules/licenses/list';
import { RETAIL_ADD_PATH, RETAIL_EDIT_PATH } from './constants';
import { retailFormSelector } from './selectors';
import { retailEditActions } from './actions';
import { EditRetailForm } from './components/EditRetailForm';

const container = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const organizationSetting = useSelector(authOrgSettingSelector);
  const analytics = useSelector(retailAnalyticsSelectors.getEntity).getValue();
  const value = useSelector(retailFormSelector.getEntity);
  const allLicenses = useSelector(licenseListSelectors.getValue);

  const license = React.useMemo(() => allLicenses.find((i) => i.id === value.getValue()?.license_id) || {}, [
    value,
    allLicenses
  ]);

  React.useEffect(() => {
    dispatch(retailAnalyticsActions.read.call(new RetailAnalyticsModel().setValue({ id: +id })));
  }, []);

  const onChange = React.useCallback((value) => dispatch(retailEditActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => {
    dispatch(retailEditActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(`${MAIN_PATH}/retail/analytics/${id}`), [value]);

  const onDelete = React.useCallback(() => push(`${MAIN_PATH}/retail/edit/${id}/delete`), [value]);

  return (
    <EditRetailForm
      license={license}
      organizationSetting={organizationSetting}
      name={Array.isArray(analytics) ? addPrefix('RR')(analytics[0].id || '--') : ''}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onDelete={onDelete}
    >
      <Switch>
        <DialogRoute
          path={RETAIL_DELETION_PATH}
          component={DeleteReportContainer}
          closePath={`${MAIN_PATH}/retail/edit/${id}`}
          dialog-face={Dialog.FACE_SECONDARY}
        />
      </Switch>
    </EditRetailForm>
  );
};

export const addRetailRoute = <Route path={RETAIL_ADD_PATH} component={container} />;
export const editRetailRoute = <Route path={RETAIL_EDIT_PATH} component={container} />;

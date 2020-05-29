import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { DialogRoute } from 'components/Dialog';
import { AddMFADeviceContainer, MFADeviceDeletionContainer } from 'modules/accountSettings/mfaDevices';
import { ACCOUNT_SETTINGS_PATH } from 'modules/accountSettings/index';
import { mfaDevicesListActions, setMFADeviceAsDefault } from './mfaDevices/actions';
import { AccountSettings } from './components/AccountSettings';
import { MFADevicesFormModel } from './mfaDevices/models';
import { mfaDevicesSelector } from './mfaDevices/selectors';
import { mfaDevicesPaths } from './mfaDevices/constants';

const container = () => {
  const dispatch = useDispatch();
  const devices = useSelector(mfaDevicesSelector);

  const onLoad = React.useCallback(() => dispatch(mfaDevicesListActions.read.call(new MFADevicesFormModel())), []);

  const onSetDeviceAsDefault = React.useCallback((id: number) => dispatch(setMFADeviceAsDefault(id)), []);

  return (
    <AccountSettings
      onLoadDevices={onLoad}
      onSetDeviceAsDefault={onSetDeviceAsDefault}
      devices={devices}
      paths={mfaDevicesPaths}
    >
      <Switch>
        <DialogRoute
          path={mfaDevicesPaths.delete}
          component={MFADeviceDeletionContainer}
          closePath={mfaDevicesPaths.index}
          dialog-title="Delete MFA Device"
        />
        <DialogRoute
          path={mfaDevicesPaths.add}
          component={AddMFADeviceContainer}
          closePath={mfaDevicesPaths.index}
          dialog-title="Add New MFA Device"
        />
      </Switch>
    </AccountSettings>
  );
};

export const accountSettingsRoute = <Route path={ACCOUNT_SETTINGS_PATH} component={container} />;

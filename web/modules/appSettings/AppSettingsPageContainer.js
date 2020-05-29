import React from 'react';
import { Route } from 'react-router-dom';
import { AppSettingsPage, AppSettingsModel } from 'components/AppSettings';
import { companiesListSelectors } from 'modules/companies/list';
import { connect } from 'react-redux';
import { createDispatchers } from 'utils/redux';
import { appSettingsActions, appSettingsSelectors } from './appSettings';
import { appSettingsListActions } from './appSettingsList';
import { appSettingsPath } from './index';

const mapStateToProps = (state) => ({
  value: appSettingsSelectors.getEntity(state),
  companyList: companiesListSelectors.getEntity(state)
});

const mapDispatchToProps = createDispatchers({
  onChange: (value) => {
    const plain = value.getValue();
    return appSettingsActions.value.set(
      new AppSettingsModel().setValue({
        ...plain,
        metrc_state: plain.metrc_state.slice(0, 2).toLowerCase()
      })
    );
  },
  onRead: appSettingsListActions.read.call,
  onReadAbort: appSettingsListActions.read.abort,
  onSubmit: appSettingsActions.write.call
});

const container = connect(mapStateToProps, mapDispatchToProps)(AppSettingsPage);

export const appSettingsRoute = <Route path={appSettingsPath} component={container} />;

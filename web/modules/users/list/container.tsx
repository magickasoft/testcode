import * as React from 'react';
import { DialogRoute } from 'components/Dialog';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Page, PageSectionPropTypes } from 'components/Page';
import { forceTableUpdate } from 'modules/tables';
import { EditUserDialog, ResetAccessDialog, UserActivation } from 'modules/users/edit';
import { UsersList, Actions } from './components/UsersList';
import { USERS_LIST_PAGE_PATH } from './constants';

interface Properties {
  sectionProperties?: typeof PageSectionPropTypes;
}

export const UsersListTable = React.memo((props: Properties) => {
  const { sectionProperties } = props;

  return <UsersList sectionProperties={sectionProperties} layerProperties={{ rounded: true, shadowed: true }} />;
});

const UsersListPage = React.memo(() => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(forceTableUpdate('users', true));
  }, []);

  return (
    <Page title="All Users" actions={<Actions />}>
      <UsersListTable />
      <Switch>
        <DialogRoute
          path={`${USERS_LIST_PAGE_PATH}/add`}
          component={EditUserDialog}
          closePath={USERS_LIST_PAGE_PATH}
          dialog-title="Add User"
        />
        <DialogRoute
          path={`${USERS_LIST_PAGE_PATH}/:id/edit`}
          component={EditUserDialog}
          closePath={USERS_LIST_PAGE_PATH}
          dialog-title="Edit User"
        />
        <DialogRoute
          path={`${USERS_LIST_PAGE_PATH}/:id/resend-invite`}
          component={ResetAccessDialog}
          closePath={USERS_LIST_PAGE_PATH}
          dialog-title="Resend Invite"
        />
        <DialogRoute
          path={`${USERS_LIST_PAGE_PATH}/:id/activate`}
          component={UserActivation}
          closePath={USERS_LIST_PAGE_PATH}
          dialog-title="Activate User"
        />
        <DialogRoute
          path={`${USERS_LIST_PAGE_PATH}/:id/deactivate`}
          component={UserActivation}
          closePath={USERS_LIST_PAGE_PATH}
          dialog-title="Deactivate User"
        />
      </Switch>
    </Page>
  );
});

export const usersListRoute = <Route path={USERS_LIST_PAGE_PATH} component={UsersListPage} />;

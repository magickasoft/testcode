import * as React from 'react';
import { push } from 'modules/router/effects';
import { USERS_LIST_PAGE_PATH } from 'modules/users/list';
import { userDetailsActions, UserDetailsFilterModel } from 'modules/users/details';
import { useDispatch, useSelector } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { userFormActions } from '../actions';
import { UserFormModel } from '../models';
import { userFormSelector } from '../selectors';
import { EditUserForm } from '../components/EditUserForm';

export const EditUserDialog = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = properties;
  const value = useSelector(userFormSelector.getEntity);
  const plainValue = value.getValue();

  React.useEffect(() => {
    if (id) {
      dispatch(userDetailsActions.read.call(new UserDetailsFilterModel().setValue({ id })));
    } else {
      dispatch(userFormActions.value.set(new UserFormModel()));
    }
  }, []);

  const onChange = React.useCallback(
    (form) => {
      dispatch(userFormActions.value.set(form));
    },
    [plainValue]
  );

  const onSubmit = React.useCallback(() => {
    dispatch(userFormActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(USERS_LIST_PAGE_PATH), [value]);

  return <EditUserForm value={value} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel} />;
};

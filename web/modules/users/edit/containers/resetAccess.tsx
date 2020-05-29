import * as React from 'react';
import { push } from 'modules/router/effects';
import { USERS_LIST_PAGE_PATH } from 'modules/users/list';
import { userDetailsActions, UserDetailsFilterModel } from 'modules/users/details';
import { useDispatch, useSelector } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { userResetAccessFormSelector } from '../selectors';
import { userResetAccessFormActions } from '../actions';
import { ResetAccessForm } from '../components/ResetAccessForm';

export const ResetAccessDialog = (props: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = props;
  const form = useSelector(userResetAccessFormSelector.getEntity);

  React.useEffect(() => {
    dispatch(userDetailsActions.read.call(new UserDetailsFilterModel().setValue({ id })));
  }, []);

  const onSubmit = React.useCallback(() => {
    dispatch(userResetAccessFormActions.write.call(form));
  }, [form]);

  const onCancel = React.useCallback(() => push(USERS_LIST_PAGE_PATH), []);

  return <ResetAccessForm value={form} onSubmit={onSubmit} onCancel={onCancel} />;
};

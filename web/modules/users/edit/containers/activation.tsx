import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { userDetailsActions, UserDetailsFilterModel, userDetailsSelector } from 'modules/users/details';
import { UserActivationForm } from '../components/UserActivationForm';
import { userFormActions } from '../actions';
import { UserFormModel } from '../models';

interface Properties {
  onClose: () => any;
}

export const UserActivation = (props: Properties & RouteComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    },
    onClose
  } = props;
  const user = useSelector(userDetailsSelector.getEntity);
  const plain = Array.isArray(user.getValue()) ? user.getValue()[0] : {};

  React.useEffect(() => {
    dispatch(userDetailsActions.read.call(new UserDetailsFilterModel().setValue({ id })));
  }, []);

  const onSubmit = React.useCallback(() => {
    dispatch(
      userFormActions.write.call(
        new UserFormModel().setValue({
          ...plain,
          active: !plain.active
        })
      )
    );
  }, [plain]);

  return <UserActivationForm value={plain} onSubmit={onSubmit} onClose={onClose} />;
};

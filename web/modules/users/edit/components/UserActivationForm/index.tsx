import * as React from 'react';
import { Confirm } from 'components/Dialog';

interface Props {
  value: any;
  onClose: () => any;
  onSubmit: () => any;
}

export const UserActivationForm = (props: Props) => {
  const { value, onSubmit, onClose } = props;

  return (
    <Confirm
      value={value}
      onClose={onClose}
      onSubmit={onSubmit}
      buttons-submit-children={value.active ? 'Deactivate' : 'Activate'}
    >
      Are you sure want to {value.active ? 'deactivate' : 'activate'} this user?
    </Confirm>
  );
};

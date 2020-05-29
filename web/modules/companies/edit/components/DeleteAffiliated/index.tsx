import * as React from 'react';
import { Confirm } from 'components/Dialog';
import { FormModel } from 'utils/form';

interface Properties {
  value: FormModel;
  name: string;
  onClose: () => any;
  onDelete: () => any;
}

export const DeleteAffiliated = (properties: Properties) => {
  const { value, onDelete, onClose, name } = properties;
  const handleSubmit = React.useCallback(() => onDelete(), [value]);

  return (
    <Confirm value={value} onClose={onClose} onSubmit={handleSubmit} buttons-submit-children="Delete">
      Are you sure want to delete <i>{name}</i> affiliated company?
    </Confirm>
  );
};

import * as React from 'react';
import { Confirm } from 'components/Dialog';
import { FormModel } from 'utils/form';
import { addPrefix } from 'utils/common';

interface Properties {
  value: FormModel;
  onClose: () => any;
  onDelete: () => any;
}

export const DeleteReport = (properties: Properties) => {
  const { value, onDelete, onClose } = properties;
  const plain = value.getValue();
  const handleSubmit = React.useCallback(() => onDelete(), [value]);

  return (
    <Confirm value={value} onClose={onClose} onSubmit={handleSubmit} buttons-submit-children="Delete">
      Are you sure want to delete <i>{addPrefix('RR')(plain.id)}</i> report?
    </Confirm>
  );
};

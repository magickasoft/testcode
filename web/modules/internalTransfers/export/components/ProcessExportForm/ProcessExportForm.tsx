import * as React from 'react';
import { FormButtons, withForm } from 'components/Form';
import { Confirm } from 'components/Dialog';
import { Button } from 'components/Button';
import { InputText } from 'components/Input';
import { InternalTranserExportFormModel } from '../../models';

interface Properties {
  value: typeof InternalTranserExportFormModel;
  onCancel: () => any;
  onSubmit: () => any;
}

const [form] = withForm((props: Properties) => {
  const { value, onCancel, onSubmit } = props;

  return (
    <Confirm value={null} onClose={onCancel} onSubmit={onSubmit} buttons-submit-children="Process">
      Are you sure want to process ITE-{value.getValue().id} export?
    </Confirm>
  );
});

export const ProcessExportForm = React.memo(form);

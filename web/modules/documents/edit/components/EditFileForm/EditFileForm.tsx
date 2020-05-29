import * as React from 'react';
import { FormButtons, withForm } from 'components/Form';
import { InputText } from 'components/Input';
import { Select } from 'components/Select';
import { DocumentFileFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof DocumentFileFormModel;
  onChange: (value: typeof DocumentFileFormModel) => any;
  onCancel: () => any;
  onSubmit: () => any;
  onDelete: () => any;
}

const fileStatuses = [
  { label: 'New', value: 'new' },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' }
];

const [form] = withForm((props: Properties) => {
  const { Field, value, onCancel, onSubmit, onDelete } = props;

  return (
    <div>
      <div className={styles.row}>
        <Field className={styles.fileName} name="name" label="File Name" input={InputText} />
        <Field className={styles.status} name="status" label="Status" input={Select} input-dataSource={fileStatuses} />
      </div>
      <Field input-multiline className={styles.notes} name="notes" label="Notes" input={InputText} />
      <FormButtons
        cancel-disabled={value.isPending()}
        cancel-onClick={onCancel}
        cancel-className={styles.cancelButton}
        submit-pending={value.isPending()}
        submit-disabled={value.isPending() || value.hasError()}
        submit-children={value.getField('id').getValue() ? 'Save' : 'Add'}
        submit-onClick={onSubmit}
        submit-className={styles.submitButton}
        delete-isHidden={!value.getValue()?.id}
        delete-children="Delete File"
        delete-onClick={onDelete}
        delete-className={styles.deleteButton}
      />
    </div>
  );
});

export const EditFileForm = React.memo(form);

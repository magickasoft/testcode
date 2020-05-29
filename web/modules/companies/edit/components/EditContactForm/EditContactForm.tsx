import * as React from 'react';
import { FormButtons, withForm } from 'components/Form';
import { InputText } from 'components/Input';
import { UserPermissions } from 'components/User';
import { ContactFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof ContactFormModel;
  onChange: (value: typeof ContactFormModel) => any;
  onCancel: () => any;
  onSubmit: () => any;
}

const [form] = withForm((props: Properties) => {
  const { Field, value, onCancel, onSubmit } = props;

  return (
    <>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field name="first_name" label="First Name" input={InputText} />
          <Field name="email" label="Email" input={InputText} />
          <Field name="permissions" label="Permission" input={UserPermissions} />
        </div>
        <div className={styles.right}>
          <Field name="last_name" label="Last Name" input={InputText} />
          <Field name="phone" label="Phone" input={InputText} />
        </div>
      </div>
      <FormButtons
        cancel-disabled={value.isPending()}
        cancel-onClick={onCancel}
        cancel-className={styles.cancelButton}
        submit-pending={value.isPending()}
        submit-disabled={value.isPending() || value.hasError()}
        submit-children={value.getField('id').getValue() ? 'Save' : 'Add'}
        submit-onClick={onSubmit}
        submit-className={styles.submitButton}
      />
    </>
  );
});

export const EditContactForm = React.memo(form);

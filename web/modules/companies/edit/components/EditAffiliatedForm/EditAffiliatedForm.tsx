import * as React from 'react';
import { FormButtons, withForm } from 'components/Form';
import { InputText } from 'components/Input';
import { CompanySelect } from 'components/Select';
import { VendorFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof VendorFormModel;
  onChange: (value: typeof VendorFormModel) => any;
  onCancel: () => any;
  onSubmit: () => any;
}

const [form] = withForm((props: Properties) => {
  const { Field, value, onCancel, onSubmit } = props;

  return (
    <>
      <Field name="parent_company_id" input={CompanySelect} input-disabled label="Main Account" />
      <Field
        name="child_company_id"
        input={CompanySelect}
        input-disabled={!!value.getValue().id}
        input-filters={[{ field: 'id', type: 'not_eq', value: value.getValue().parent_company_id }]}
        label="Affiliated Company"
      />
      <Field input-multiline name="notes" label="Notes" input={InputText} />
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

export const EditAffiliatedForm = React.memo(form);

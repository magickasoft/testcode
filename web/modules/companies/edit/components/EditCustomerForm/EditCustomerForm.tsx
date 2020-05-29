import * as React from 'react';
import { FormButtons, withForm } from 'components/Form';
import { InputText } from 'components/Input';
import { Select } from 'components/Select';
import { ListModel } from 'utils/list';
import { ContactFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof ContactFormModel;
  onChange: (value: typeof ContactFormModel) => any;
  onCancel: () => any;
  onSubmit: () => any;
  companies: ListModel;
}

const [form] = withForm((props: Properties) => {
  const { Field, value, onCancel, onSubmit, companies } = props;
  const plainCompanies = companies.getValue();

  const customerDataSource = (Array.isArray(plainCompanies) ? plainCompanies : []).map((i) => ({
    label: i.name,
    value: i.id
  }));

  return (
    <>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field
            name="company_id"
            input={Select}
            input-dataSource={customerDataSource}
            input-disabled
            label="Relationship"
          />
          <Field name="name" label="Customer Name" input={InputText} />
          <Field name="phone" label="Phone" input={InputText} />
          <Field name="email" label="Email" input={InputText} />
        </div>
        <div className={styles.right}>
          <Field name="state" label="State" input={InputText} />
          <Field name="city" label="City" input={InputText} />
          <Field name="address" label="Address" input={InputText} />
          <Field name="zip_code" label="Zip Code" input={InputText} />
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

export const EditCustomerForm = React.memo(form);

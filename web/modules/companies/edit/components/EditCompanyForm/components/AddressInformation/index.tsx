import * as React from 'react';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputText } from 'components/Input';
import { CompanyFormModel } from 'modules/companies/edit';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof CompanyFormModel;
  onChange: (value: typeof CompanyFormModel) => any;
}

const [AddressInformation] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <FieldSet legend="Address Information" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field className={styles.streetInput} name="street" label="Street" input={InputText} />
          <Field className={styles.cityInput} name="city" label="City" input={InputText} />
          <Field className={styles.stateInput} name="state" label="State/Province" input={InputText} />
          <Field className={styles.zipInput} name="postal_code" label="Zip/Postal Code" input={InputText} />
          <Field className={styles.countryInput} name="country" label="Country" input={InputText} />
        </div>
        <div className={styles.right} />
      </div>
    </FieldSet>
  );
});

export { AddressInformation };

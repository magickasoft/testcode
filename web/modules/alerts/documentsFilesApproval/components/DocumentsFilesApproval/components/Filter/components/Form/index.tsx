import * as React from 'react';
import { withForm } from 'components/Form';
import { CompanySelect, LicenseSelect, SingleSelectAutoSuggest, SelectListName, Select } from 'components/Select';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: any;
  onChange: (value: any) => any;
}

const [form] = withForm((properties: Properties) => {
  const { Field, value } = properties;
  const plainValue = value.getValue();

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <Field
          name="company_id"
          label="Relationship"
          input={CompanySelect}
          input-emptyOption={{ label: 'All', value: '' }}
          input-className={styles.field}
        />
      </div>
      <div className={styles.column}>
        <Field
          name="license_id"
          label="License"
          input={LicenseSelect}
          input-emptyOption={{ label: 'All', value: '' }}
          input-className={styles.field}
          input-filters={
            plainValue.company_id ? [{ field: 'company_id', type: 'eq', value: plainValue.company_id }] : undefined
          }
        />
      </div>
    </div>
  );
});

export { form as Form };

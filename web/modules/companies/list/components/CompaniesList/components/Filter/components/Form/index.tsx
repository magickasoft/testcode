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
  const { Field } = properties;

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <Field
          name="active"
          label="Active"
          input={SingleSelectAutoSuggest}
          input-emptyOption={{ label: 'All', value: '' }}
          input-listName={SelectListName.BooleanFilter}
          input-className={styles.field}
        />
      </div>
      <div className={styles.column}>
        <Field
          name="customer_status"
          label="Customer Status"
          input={SingleSelectAutoSuggest}
          input-emptyOption={{ label: 'All', value: '' }}
          input-className={styles.field}
          input-listName={SelectListName.CustomerStatus}
        />
      </div>
      <div className={styles.column}>
        <Field
          name="entity_type"
          label="Entity Type"
          input={SingleSelectAutoSuggest}
          input-emptyOption={{ label: 'All', value: '' }}
          input-className={styles.field}
          input-listName={SelectListName.EntityType}
        />
      </div>
      <div className={styles.column}>
        <Field
          name="business_type"
          label="BusinessType"
          input={SingleSelectAutoSuggest}
          input-emptyOption={{ label: 'All', value: '' }}
          input-className={styles.field}
          input-listName={SelectListName.BusinessType}
        />
      </div>
    </div>
  );
});

export { form as Form };

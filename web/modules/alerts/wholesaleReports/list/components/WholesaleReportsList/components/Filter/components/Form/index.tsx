import * as React from 'react';
import { withForm } from 'components/Form';
import { CompanySelect, LicenseSelect, SelectListName, SingleSelectAutoSuggest } from 'components/Select';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: any;
  onChange: (value: any) => any;
}

const [Form] = withForm((properties: Properties) => {
  const { Field, value } = properties;
  const plainValue = value.getValue();

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <Field
          className={styles.field}
          name="status"
          label="Status"
          input={SingleSelectAutoSuggest}
          input-listName={SelectListName.WholesaleReportQueueStatus}
          input-emptyOption={{ label: 'All', value: '' }}
        />
      </div>
      <div className={styles.column}>
        <Field
          className={styles.field}
          name="company_id"
          label="Company"
          input={CompanySelect}
          input-emptyOption={{ label: 'All', value: '' }}
        />
      </div>
      <div className={styles.column}>
        <Field
          className={styles.field}
          name="license_id"
          label="License"
          input={LicenseSelect}
          input-emptyOption={{ label: 'All', value: '' }}
          input-filters={
            plainValue.company_id ? [{ field: 'company_id', type: 'eq', value: plainValue.company_id }] : undefined
          }
        />
      </div>
    </div>
  );
});

export { Form };

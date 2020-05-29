import * as React from 'react';
import { withForm } from 'components/Form';
import { CompanySelect, LicenseSelect, SingleSelectAutoSuggest, SelectListName, Select } from 'components/Select';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: any;
  onChange: (value: any) => any;
  hiddenFields?: string[];
}

const [form] = withForm((properties: Properties) => {
  const { Field, value, hiddenFields } = properties;
  const plainValue = value.getValue();

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        {hiddenFields?.indexOf('company_id') === -1 && (
          <Field
            name="company_id"
            label="Relationship"
            input={CompanySelect}
            input-emptyOption={{ label: 'All', value: '' }}
            input-className={styles.field}
          />
        )}
        <Field
          name="due_status"
          label="Due Status"
          input={SingleSelectAutoSuggest}
          input-className={styles.field}
          input-emptyOption={{ label: 'All', value: '' }}
          input-options={[
            { label: 'First Alert', value: 'first-alert' },
            { label: 'Last Alert', value: 'last-alert' },
            { label: 'Past Due', value: 'past-due' }
          ]}
        />
      </div>
      {hiddenFields?.indexOf('license_id') === -1 && (
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
      )}
      <div className={styles.column}>
        <Field
          name="internal"
          label="Internal"
          input={SingleSelectAutoSuggest}
          input-className={styles.field}
          input-listName={SelectListName.BooleanFilter}
          input-emptyOption={{ label: 'All', value: '' }}
        />
      </div>
      <div className={styles.column}>
        <Field
          name="frequency"
          label="Frequency"
          input={SingleSelectAutoSuggest}
          input-className={styles.field}
          input-listName={SelectListName.Frequency}
        />
      </div>
    </div>
  );
});

export { form as Form };

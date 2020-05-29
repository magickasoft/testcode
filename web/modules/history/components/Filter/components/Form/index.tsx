import * as React from 'react';
import { withForm } from 'components/Form';
import { Select } from 'components/Select';
import { FieldSet } from 'components/Field';
import { entityTypesDictionary } from 'modules/history';

import { DatePicker } from 'components/DatePicker';
import styles from './styles.module.css';

interface Properties {
  Field: any;
  onChange: (value: any) => any;
  value: any;
}

const [form] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <Field
          className={styles.field}
          name="entity_type"
          label="Entity Type"
          input={Select}
          input-dataSource={[{ value: '', label: 'All' }, ...entityTypesDictionary]}
        />
      </div>
      <div className={styles.column}>
        <Field
          className={styles.field}
          name="action_type"
          label="Action Type"
          input={Select}
          input-dataSource={[
            { value: '', label: 'All' },
            { value: '1', label: 'Create' },
            { value: '2', label: 'Update' },
            { value: '3', label: 'Delete' }
          ]}
        />
      </div>
      <div className={styles.column}>
        <Field name="date_from" label="Date From" input={DatePicker} />
      </div>
      <div className={styles.column}>
        <Field name="date_to" label="Date To" input={DatePicker} />
      </div>
    </div>
  );
});

export { form as Form };

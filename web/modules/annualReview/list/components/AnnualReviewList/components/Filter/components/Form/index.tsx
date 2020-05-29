import * as React from 'react';
import { withForm } from 'components/Form';
import { Select } from 'components/Select';
import { ListModel } from 'utils/list';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  companies: ListModel;
  onChange: (value: any) => any;
}

const [Form] = withForm((properties: Properties) => {
  const { Field, companies } = properties;

  const plainCompanies = companies.getValue();

  const companyDataSource = [{ label: 'All', value: '' }].concat(
    (Array.isArray(plainCompanies) ? plainCompanies : []).map((i) => ({ label: i.name, value: i.id }))
  );

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <Field
          name="status"
          label="Status"
          input={Select}
          input-className={styles.field}
          input-dataSource={[
            { label: 'All', value: '' },
            { label: 'New', value: 'new' },
            { label: 'Approved', value: 'approved' }
          ]}
        />
      </div>
      <div className={styles.column}>
        <Field
          name="company_id"
          label="Company"
          input={Select}
          input-className={styles.field}
          input-dataSource={companyDataSource}
        />
      </div>
    </div>
  );
});

export { Form };

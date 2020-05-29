import * as React from 'react';
import { withForm } from 'components/Form';
import { Select } from 'components/Select';
import { ListModel } from 'utils/list';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  companies: ListModel;
  licenses: ListModel;
  onChange: (value: any) => any;
}

const [Form] = withForm((properties: Properties) => {
  const { Field, companies, licenses } = properties;

  const plainCompanies = companies.getValue();
  const plainLicenses = licenses.getValue();

  const companyDataSource = [{ label: 'All', value: '' }].concat(
    (Array.isArray(plainCompanies) ? plainCompanies : []).map((i) => ({ label: i.name, value: i.id }))
  );

  const licenseDataSource = [{ label: 'All', value: '' }].concat(
    (Array.isArray(plainLicenses) ? plainLicenses : []).map((i) => ({ label: i.name, value: i.id }))
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
            { label: 'Incomplete', value: 'incomplete' },
            { label: 'Pending Review', value: 'pending_review' }
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
      <div className={styles.column}>
        <Field
          name="license_id"
          label="License"
          input={Select}
          input-className={styles.field}
          input-dataSource={licenseDataSource}
        />
      </div>
    </div>
  );
});

export { Form };

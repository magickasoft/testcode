import * as React from 'react';
import { withForm } from 'components/Form';
import { CompanySelect, LicenseSelect, SelectListName, SingleSelectAutoSuggest } from 'components/Select';
import { FieldSet } from 'components/Field';
import { DatePicker } from 'components/DatePicker';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  onChange: (value: any) => any;
  value: any;
  hiddenFields?: string[];
}

const [form] = withForm((properties: Properties) => {
  const { Field, value } = properties;
  const plainValue = value.getValue();

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <FieldSet legend="Transfer Status">
          <Field
            className={styles.field}
            name="status"
            label="Status"
            input={SingleSelectAutoSuggest}
            input-listName={SelectListName.InternalTransferStatus}
            input-emptyOption={{ label: 'All', value: '' }}
          />
        </FieldSet>
        <FieldSet legend="Select a period">
          <div className={styles.fieldRow}>
            <Field className={styles.inputFrom} name="dateFrom" label="Start Date" input={DatePicker} />
            <Field className={styles.inputFrom} name="dateTo" label="End Date" input={DatePicker} />
          </div>
        </FieldSet>
      </div>
      <div className={styles.column}>
        <FieldSet legend="Sender Details">
          <div className={styles.fieldRow}>
            <Field
              className={styles.inputCompany}
              name="sender_company_id"
              input={CompanySelect}
              input-emptyOption={{ label: 'All', value: '' }}
              label="Sender"
            />
            <Field
              className={styles.field}
              name="sender_license_id"
              input={LicenseSelect}
              input-emptyOption={{ label: 'All', value: '' }}
              input-filters={
                plainValue.sender_company_id
                  ? [{ field: 'company_id', type: 'eq', value: plainValue.sender_company_id }]
                  : undefined
              }
              label="License"
            />
          </div>
        </FieldSet>
        <FieldSet legend="Recipient Details">
          <div className={styles.fieldRow}>
            <Field
              className={styles.inputCompany}
              name="recipient_company_id"
              input={CompanySelect}
              input-emptyOption={{ label: 'All', value: '' }}
              label="Recipient"
            />
            <Field
              className={styles.field}
              name="recipient_license_id"
              input={LicenseSelect}
              input-emptyOption={{ label: 'All', value: '' }}
              input-filters={
                plainValue.recipient_company_id
                  ? [{ field: 'company_id', type: 'eq', value: plainValue.recipient_company_id }]
                  : undefined
              }
              label="License"
            />
          </div>
        </FieldSet>
      </div>
    </div>
  );
});

export { form as Form };

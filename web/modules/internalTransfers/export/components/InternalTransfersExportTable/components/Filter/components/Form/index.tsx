import * as React from 'react';
import { withForm } from 'components/Form';
import { SingleSelectAutoSuggest, SelectListName } from 'components/Select';
import { FieldSet } from 'components/Field';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  onChange: (value: any) => any;
  value: any;
}

const [form] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <Field
      className={styles.statusInput}
      name="status"
      label="Status"
      input={SingleSelectAutoSuggest}
      input-emptyOption={{ label: 'All', value: '' }}
      input-listName={SelectListName.InternalTransferExportStatus}
    />
  );
});

export { form as Form };

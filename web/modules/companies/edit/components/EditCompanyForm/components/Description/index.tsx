import * as React from 'react';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputText } from 'components/Input';
import { Delimiter } from 'components/Delimiter';
import { CompanyFormModel } from 'modules/companies/edit';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof CompanyFormModel;
  onChange: (value: typeof CompanyFormModel) => any;
}

const [Description] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <FieldSet legend="Description" className={styles.section}>
      <Field
        input-multiline
        input-className={styles.descriptionInput}
        name="description"
        label="Text area"
        input={InputText}
      />
      <Delimiter />
    </FieldSet>
  );
});

export { Description };

import * as React from 'react';
import { momentDate } from 'utils/moment';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputText } from 'components/Input';
import { SingleSelectAutoSuggest, SelectListName, Select } from 'components/Select';
import { Delimiter } from 'components/Delimiter';
import { DatePicker } from 'components/DatePicker';
import { CompanyFormModel } from 'modules/companies/edit';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof CompanyFormModel;
  onChange: (value: typeof CompanyFormModel) => any;
}

const [AccountDetails] = withForm((properties: Properties) => {
  const { Field } = properties;

  const formatMoment = (value) => (value == null ? value : momentDate(value));

  const parseMoment = (value) => momentDate(value).format('YYYY-MM-DDTHH:mm:ssZ');

  return (
    <FieldSet legend="Account Detail" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field
            className={styles.businessTypeInput}
            name="business_type"
            label="Business Type"
            input={SingleSelectAutoSuggest}
            input-listName={SelectListName.BusinessType}
          />
          <Field
            className={styles.businessTypeInput}
            name="entity_type"
            label="Entity Type"
            input={SingleSelectAutoSuggest}
            input-listName={SelectListName.EntityType}
          />
          <Field
            className={styles.entityTypeInput}
            name="stateFounded"
            label="State Of Incorporation"
            input={SingleSelectAutoSuggest}
            input-listName={SelectListName.StateOfIncorporation}
          />
        </div>
        <div className={styles.right}>
          <Field
            name="dateFounded"
            label="Primary Account Opening Date"
            input={DatePicker}
            input-format="YYYY-MM-DD"
            parseValue={parseMoment}
            formatValue={formatMoment}
          />
          <Field className={styles.einInput} name="ein" label="EIN #" input={InputText} />
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { AccountDetails };

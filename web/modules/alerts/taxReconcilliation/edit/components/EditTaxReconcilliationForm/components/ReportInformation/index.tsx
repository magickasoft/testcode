import * as React from 'react';
import { momentDate } from 'utils/moment';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputText } from 'components/Input';
import { DatePicker } from 'components/DatePicker';
import { Delimiter } from 'components/Delimiter';
import { TaxReconcilliationFormModel } from '../../../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof TaxReconcilliationFormModel;
  onChange: (value: typeof TaxReconcilliationFormModel) => any;
}

const [ReportInformation] = withForm((properties: Properties) => {
  const { Field } = properties;

  const formatMoment = (value) => (value == null ? value : momentDate(value));

  const parseMoment = (value) => momentDate(value).format('YYYY-MM-DDTHH:mm:ssZ');

  return (
    <FieldSet legend="Tax Report" className={styles.section}>
      <Field
        name="start_date"
        label="Start Date"
        input={DatePicker}
        input-format="YYYY-MM-DD"
        parseValue={parseMoment}
        formatValue={formatMoment}
      />
      <Field input-multiline input-className={styles.descriptionInput} name="notes" label="Notes" input={InputText} />
      <Delimiter />
    </FieldSet>
  );
});

export { ReportInformation };

import * as React from 'react';
import { momentDate } from 'utils/moment';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputNumber, InputText } from 'components/Input';
import { DatePicker } from 'components/DatePicker';
import { Info } from 'components/Info';
import { InvoiceSubmittalFormModel } from '../../../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof InvoiceSubmittalFormModel;
  onChange: (value: typeof InvoiceSubmittalFormModel) => any;
}

const [General] = withForm((properties: Properties) => {
  const { Field } = properties;

  const formatMoment = (value) => (value == null ? value : momentDate(value));

  const parseMoment = (value) => momentDate(value).format('YYYY-MM-DDTHH:mm:ssZ');

  return (
    <FieldSet legend="Invoice Submittal Detail" className={styles.section}>
      <Info label="License">-</Info>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field name="amount" label="Amount" input={InputNumber} />
        </div>
        <div className={styles.right}>
          <Field
            name="date"
            label="Date"
            input={DatePicker}
            input-format="YYYY-MM-DD"
            parseValue={parseMoment}
            formatValue={formatMoment}
          />
        </div>
      </div>
      <Field
        className={styles.nameInput}
        name="manifest_number"
        label="Manifest Number (If Applicable)"
        input={InputText}
      />
      <Field input-multiline input-className={styles.descriptionInput} name="notes" label="Notes" input={InputText} />
    </FieldSet>
  );
});

export { General };

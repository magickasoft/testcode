import * as React from 'react';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputNumber } from 'components/Input';
import { Delimiter } from 'components/Delimiter';
import { RetailFormModel } from '../../../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof RetailFormModel;
  onChange: (value: typeof RetailFormModel) => any;
}

const [PosSales] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <FieldSet legend="POS Sales" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field
            className={styles.input}
            name="sales_pos_comparison.values.cash"
            label="POS Cash"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_pos_comparison.values.other"
            label="POS Other"
            input={InputNumber}
          />
        </div>
        <div className={styles.right}>
          <Field
            className={styles.input}
            name="sales_pos_comparison.values.credit_debit"
            label="POS Credit / Debit"
            input={InputNumber}
          />
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { PosSales };

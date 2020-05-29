import * as React from 'react';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputNumber } from 'components/Input';
import { Delimiter } from 'components/Delimiter';
import { WholesaleFormModel } from '../../../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof WholesaleFormModel;
  onChange: (value: typeof WholesaleFormModel) => any;
}

const [SalesData] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <FieldSet legend="Sales Data" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field
            className={styles.input}
            name="sales_current_month.values.cash_qty"
            label="Cash Deposits Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.invoices_qty"
            label="Invoices Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.internal_transfers_qty"
            label="Internal Transfers Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.checks_qty"
            label="Checks Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.other_qty"
            label="Sales Other Quantity"
            input={InputNumber}
          />
        </div>
        <div className={styles.right}>
          <Field
            className={styles.input}
            name="sales_current_month.values.cash_sold"
            label="Cash Deposits Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.invoices_sold"
            label="Invoices Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.internal_transfers_sold"
            label="Internal Transfers Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.checks_sold"
            label="Checks Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.other_sold"
            label="Sales Other Amount"
            input={InputNumber}
          />
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { SalesData };

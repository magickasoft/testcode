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

const [SalesData] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <FieldSet legend="Sales Data" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field
            className={styles.input}
            name="sales_current_month.values.cash_qty"
            label="Cash Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.credit_debit_qty"
            label="Credit / Debit Quantity"
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
            name="sales_current_month.values.invoices_qty"
            label="Invoices Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.other_qty"
            label="Sales Other Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.atm_load_qty"
            label="ATM Load Quantity"
            input={InputNumber}
          />
        </div>
        <div className={styles.right}>
          <Field
            className={styles.input}
            name="sales_current_month.values.cash_sold"
            label="Cash Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.credit_debit_sold"
            label="Credit / Debit Amount"
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
            name="sales_current_month.values.invoices_sold"
            label="Invoices Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.other_sold"
            label="Sales Other Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="sales_current_month.values.atm_load_sold"
            label="ATM Load Amount"
            input={InputNumber}
          />
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { SalesData };

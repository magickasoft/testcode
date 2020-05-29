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

const [ProductsData] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <FieldSet legend="Products Data" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field
            className={styles.input}
            name="product_current_month.values.bud_qty"
            label="Bud / Flower Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.concentrate_qty"
            label="Concentrate Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.infused_edible_qty"
            label="Infused Edible Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.infused_nonedible_qty"
            label="Infused Non-Edible Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.plants_qty"
            label="Plants Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.shake_trim_qty"
            label="Shake / Trim Quantity"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.other_qty"
            label="Product Other Quantity"
            input={InputNumber}
          />
        </div>
        <div className={styles.right}>
          <Field
            className={styles.input}
            name="product_current_month.values.bud_sold"
            label="Bud / Flower Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.concentrate_sold"
            label="Concentrate Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.infused_edible_sold"
            label="Infused Edible Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.infused_nonedible_sold"
            label="Infused Non-Edible Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.plants_sold"
            label="Plants Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.shake_trim_sold"
            label="Shake / Trim Amount"
            input={InputNumber}
          />
          <Field
            className={styles.input}
            name="product_current_month.values.other_sold"
            label="Product Other Amount"
            input={InputNumber}
          />
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { ProductsData };

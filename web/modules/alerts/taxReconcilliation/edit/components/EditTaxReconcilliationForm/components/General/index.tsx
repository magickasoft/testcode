import * as React from 'react';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputNumber } from 'components/Input';
import { CheckBox } from 'components/CheckBox';
import { Delimiter } from 'components/Delimiter';
import { Info } from 'components/Info';
import { TaxReconcilliationFormModel } from '../../../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof TaxReconcilliationFormModel;
  onChange: (value: typeof TaxReconcilliationFormModel) => any;
}

const [General] = withForm((properties: Properties) => {
  const { Field } = properties;

  return (
    <FieldSet legend="Tax Reconciliation Detail" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field className={styles.activeInput} name="ready" label="Report is ready for review" input={CheckBox} />
          <Info label="License">-</Info>
        </div>
        <div className={styles.right}>
          <Field name="current_month.collected.total" label="Collected Tax" input={InputNumber} />
          <Field name="current_month.calculated.total" label="Calculated Tax" input={InputNumber} />
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { General };

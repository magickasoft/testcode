import * as React from 'react';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { CheckBox } from 'components/CheckBox';
import { Delimiter } from 'components/Delimiter';
import { Info } from 'components/Info';
import { WholesaleFormModel } from '../../../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof WholesaleFormModel;
  onChange: (value: typeof WholesaleFormModel) => any;
  license: any;
}

const [General] = withForm((properties: Properties) => {
  const { Field, license } = properties;

  return (
    <FieldSet legend="General" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field className={styles.activeInput} name="ready" label="Report is ready for review" input={CheckBox} />
        </div>
        <div className={styles.right}>
          <Info label="License">{license?.name}</Info>
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { General };

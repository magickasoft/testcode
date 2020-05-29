import moment from 'moment';
import * as React from 'react';
import { Delimiter } from 'components/Delimiter';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { Info } from 'components/Info';
import { InternalTransferFormModel } from 'modules/internalTransfers/models/InternalTransferFormModel';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof InternalTransferFormModel;
  onChange: (value: typeof InternalTransferFormModel) => any;
}

const [systemInformation] = withForm((properties: Properties) => {
  const { value } = properties;
  const plain = value.getValue();

  return (
    <>
      <Delimiter />
      <FieldSet legend="System Information" className={styles.section}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <Info label="Created Date">{moment(plain.created_at).format('YYYY-MM-DD')}</Info>
          </div>
          <div className={styles.right}>
            <Info label="Approved Date">
              {plain.approval_date ? moment(plain.approval_date).format('YYYY-MM-DD') : '-'}
            </Info>
          </div>
        </div>
      </FieldSet>
    </>
  );
});

export { systemInformation as SystemInformation };

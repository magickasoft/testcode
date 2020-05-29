import * as React from 'react';
import { withForm } from 'components/Form/index';
import { FieldSet } from 'components/Field';
import { Info } from 'components/Info';
import { InputNumber, InputText } from 'components/Input/index';
import { LicenseSelect, SingleSelectAutoSuggest, SelectListName } from 'components/Select';
import { ListModel } from 'utils/list/index';
import { getLicenseInfo } from 'utils/common';
import { InternalTransferFormModel } from 'modules/internalTransfers/models/InternalTransferFormModel';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof InternalTransferFormModel;
  onChange: (value: typeof InternalTransferFormModel) => any;
  licenses: ListModel;
  companies: ListModel;
}

const [relationshipDetails] = withForm((properties: Properties) => {
  const { Field, value, licenses, companies } = properties;
  const licenseInfo = getLicenseInfo({ licenses, companies });
  // eslint-disable-next-line
  const { id, recipient_license_id } = value.getValue();

  const amountInput = React.useRef((properties) => (
    <>
      $
      <InputNumber {...properties} />
    </>
  ));

  return (
    <FieldSet legend="Relationship Detail" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          {id ? (
            <Info className={styles.idInfo} label="Internal transfer number">
              IT-{id || '...'}
            </Info>
          ) : (
            <Field
              className={styles.statusSelect}
              name="status"
              label="Status"
              input={SingleSelectAutoSuggest}
              input-listName={SelectListName.InternalTransferStatus}
            />
          )}
          {id ? (
            <Info className={styles.recipientInfo} label="Recipient">
              {licenseInfo(recipient_license_id).name}
            </Info>
          ) : (
            <Field
              className={styles.senderSelect}
              name="recipient_license_id"
              input={LicenseSelect}
              input-emptyOption={{ label: '---', value: '' }}
              label="Recipient"
            />
          )}
          <Field className={styles.amountInput} name="amount" label="Amount" input={amountInput.current} />
        </div>
        <div className={styles.right}>
          {id ? (
            <Field
              className={styles.statusSelect}
              name="status"
              label="Status"
              input={SingleSelectAutoSuggest}
              input-listName={SelectListName.InternalTransferStatus}
            />
          ) : (
            <div className={styles.fieldStub} />
          )}
          <Field
            className={styles.senderSelect}
            name="sender_license_id"
            input={LicenseSelect}
            input-emptyOption={{ label: '---', value: '' }}
            label="Sender"
          />
          <Field
            className={styles.manifestNumberInput}
            name="manifest_number"
            label="Manifest Number"
            input={InputText}
          />
        </div>
      </div>
      <Field
        className={styles.notesField}
        input-className={styles.notesInput}
        name="notes"
        label="Notes"
        input={InputText}
        input-multiline
      />
    </FieldSet>
  );
});

export { relationshipDetails as RelationshipDetails };

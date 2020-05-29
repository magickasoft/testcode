import * as React from 'react';
import { withForm } from 'components/Form';
import { FieldSet } from 'components/Field';
import { InputText } from 'components/Input';
import { SingleSelectAutoSuggest, SelectListName, CompanySelect } from 'components/Select';
import { CheckBox } from 'components/CheckBox';
import { Delimiter } from 'components/Delimiter';
import { Info } from 'components/Info';
import { CompanyFormModel } from 'modules/companies/edit';
import { Tooltip } from 'components/Tooltip';
import { Icon } from 'components/Icon';
import { CompaniesBeingHeld } from './companiesBeingHeld';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof CompanyFormModel;
  onChange: (value: typeof CompanyFormModel) => any;
}

const [Relationships] = withForm((properties: Properties) => {
  const { Field, value } = properties;
  const plainValue = value.getValue();

  return (
    <FieldSet legend="Relationship Detail" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <Field className={styles.nameInput} name="name" label="Company name" input={InputText} />
          <Field className={styles.legalNameInput} name="legal_name" label="Entity Legal name" input={InputText} />
          <Field className={styles.dbaInput} name="dba" label="DBA" input={InputText} />
          <Field
            className={styles.customerInput}
            name="customer_status"
            label="Customer Status"
            input={SingleSelectAutoSuggest}
            input-listName={SelectListName.CustomerStatus}
          />
        </div>
        <div className={styles.right}>
          <Field className={styles.activeInput} name="active" label="Active" input={CheckBox} />
          <Field
            className={styles.activeInput}
            name="is_holding"
            label={
              <span className={styles.holdingLabel}>
                <span>Holding company?</span>
                {plainValue.is_holding && !!plainValue.holding_group_companies_ids?.length && (
                  <Tooltip
                    id="holdingHint"
                    type="warning"
                    content="You cannot change this option until you have some holding companies."
                  >
                    <Icon type="exclamation" size="small" />
                  </Tooltip>
                )}
              </span>
            }
            input={CheckBox}
            input-disabled={!!plainValue.holding_group_companies_ids?.length}
          />
          {plainValue.is_holding ? (
            <Field
              className={styles.heldCompaniesInput}
              name="holding_group_companies_ids"
              input={CompaniesBeingHeld}
              input-holdingId={plainValue.id}
              label="Holding Companies"
            />
          ) : (
            <Field
              name="holding_id"
              input={CompanySelect}
              input-emptyOption={{ label: '---', value: '' }}
              input-filters={[{ field: 'is_holding', type: 'eq', value: true }]}
              label="Holding"
            />
          )}
          <Field className={styles.legalNameInput} name="phone" label="Phone" input={InputText} />
          <Field className={styles.activeInput} name="website" label="Website" input={InputText} />
        </div>
      </div>
      <Delimiter />
    </FieldSet>
  );
});

export { Relationships };

import * as React from 'react';
import { FieldSet } from 'components/Field';
import { FormButtons, withForm } from 'components/Form';
import { Tooltip } from 'components/Tooltip';
import { Link } from 'components/Link';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Delimiter } from 'components/Delimiter';
import isEqual from 'lodash/isEqual';
import { InputNumber, InputText } from 'components/Input';
import { SingleSelectAutoSuggest, SelectListName, CompanySelect, LicenseSelect } from 'components/Select';
import { CheckBox } from 'components/CheckBox';
import { Info } from 'components/Info';
import { Page, PageDefaultProps } from 'components/Page';
import { Layer } from 'components/Layer';
import { Panel } from 'components/Panel';
import { ListModel } from 'utils';
import { DocumentFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  value: typeof DocumentFormModel;
  onChange: (value: typeof DocumentFormModel) => any;
  onSubmit: () => any;
  onCancel: () => any;
  onDelete: () => any;
  children?: React.ReactNode;
  Field: any;
  companyName: string;
  licenseName: string;
  hasMultiplePeriods: boolean;
  licenses: ListModel;
}

const [form] = withForm((properties: Properties) => {
  const {
    value,
    onSubmit,
    onCancel,
    onDelete,
    children,
    Field,
    companyName,
    licenseName,
    hasMultiplePeriods,
    licenses
  } = properties;
  const { id, name, frequency } = value.getValue();
  const hasChanges = !isEqual(value.getValue(), value.getInitialValue());

  return (
    <Page {...properties} subTitle={name || (value.isPending() ? '---' : 'Add New')} isPending={value.isPending()}>
      <Layer rounded shadowed>
        <Panel title="Edit Document Information" collapsible={false} content-className={styles.content}>
          <FieldSet legend="Client Document Detail" className={styles.section}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <Field className={styles.nameInput} name="name" label="Document name" input={InputText} />
                {id ? (
                  <Info label="Relationship Name">{companyName || '---'}</Info>
                ) : (
                  <Field
                    className={styles.relationshipInput}
                    name="company_id"
                    label="Relationship Name"
                    input={CompanySelect}
                  />
                )}
                <Field
                  className={styles.frequencyInput}
                  name="frequency"
                  label={
                    <span className={styles.frequencyLabel}>
                      Frequency
                      {hasMultiplePeriods && (
                        <Tooltip
                          id="frequencyHint"
                          type="warning"
                          content={'Document having more than one period cannot be converted to "One Time Document"'}
                        >
                          <Icon type="exclamation" />
                        </Tooltip>
                      )}
                    </span>
                  }
                  input={SingleSelectAutoSuggest}
                  input-listName={SelectListName.Frequency}
                />
                <Field
                  className={styles.expirationInput}
                  name="expiration_delay_days"
                  label="Expiration Delay (days)"
                  input={InputNumber}
                />
              </div>
              <div className={styles.column}>
                <Field className={styles.nameInput} name="internal" label="Internal" input={CheckBox} />
                {id ? (
                  <Info className={styles.licenseName} label="License Name">
                    {licenseName || '---'}
                  </Info>
                ) : (
                  <Field
                    className={styles.licensesInput}
                    name="license_id"
                    label="License Name"
                    input={LicenseSelect}
                  />
                )}
                {frequency === 'one-time' ? (
                  <Field
                    className={styles.frequencyInput}
                    name="status"
                    label="Status"
                    input={SingleSelectAutoSuggest}
                    input-listName={SelectListName.DocumentPeriodStatus}
                  />
                ) : (
                  <Field
                    className={styles.frequencyInput}
                    name="start_date_type"
                    label="Start Date Type"
                    input={SingleSelectAutoSuggest}
                    input-listName={SelectListName.StartDateType}
                  />
                )}
              </div>
            </div>
            {frequency === 'one-time' && (
              <Field input-multiline className={styles.notes} name="notes" label="Notes" input={InputText} />
            )}
          </FieldSet>
        </Panel>
      </Layer>
      <div className={styles.footer}>
        <FormButtons
          cancel-disabled={value.isPending()}
          cancel-onClick={onCancel}
          submit-pending={value.isPending()}
          submit-disabled={!hasChanges || value.isPending() || value.hasError()}
          submit-onClick={onSubmit}
          delete-isHidden={!+id}
          delete-children="Delete"
          delete-onClick={onDelete}
        />
      </div>
      {children}
    </Page>
  );
});

export const EditDocumentForm = React.memo(form);

(EditDocumentForm as any).defaultProps = {
  ...PageDefaultProps,
  title: 'Document',
  face: Page.FACE_SECONDARY
};

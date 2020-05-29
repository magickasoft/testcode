import * as React from 'react';
import { momentDate } from 'utils/moment';
import { Info } from 'components/Info';
import { FormButtons, withForm } from 'components/Form';
import { InputText } from 'components/Input';
import { DatePicker } from 'components/DatePicker';
import { Select } from 'components/Select';
import { DocumentFileFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  Field: any;
  value: typeof DocumentFileFormModel;
  onChange: (value: typeof DocumentFileFormModel) => any;
  onCancel: () => any;
  onSubmit: () => any;
  onDelete: () => any;
  documentName: string;
}

const periodStatuses = [
  { label: 'New', value: 'new' },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' }
];

const [form] = withForm((props: Properties) => {
  const { Field, value, onCancel, onSubmit, onDelete, documentName } = props;

  const formatMoment = (value) => (value == null ? value : momentDate(value));

  const parseMoment = (value) => momentDate(value).format('YYYY-MM-DDTHH:mm:ssZ');

  return (
    <div>
      <div className={styles.row}>
        <Field
          className={styles.startDate}
          name="start_date"
          label="Start Date"
          input={DatePicker}
          input-format="YYYY-MM-DD"
          parseValue={parseMoment}
          formatValue={formatMoment}
        />
        <Field
          className={styles.endDate}
          name="end_date"
          label="End Date"
          input={DatePicker}
          input-format="YYYY-MM-DD"
          parseValue={parseMoment}
          formatValue={formatMoment}
        />
      </div>
      <div className={styles.row}>
        <Info className={styles.documentName} label="Document Name">
          {documentName || '---'}
        </Info>
        <Field
          className={styles.status}
          name="status"
          label="Status"
          input={Select}
          input-dataSource={periodStatuses}
        />
      </div>
      <Field input-multiline className={styles.notes} name="notes" label="Notes" input={InputText} />
      <FormButtons
        cancel-disabled={value.isPending()}
        cancel-onClick={onCancel}
        cancel-className={styles.cancelButton}
        submit-pending={value.isPending()}
        submit-disabled={value.isPending() || value.hasError()}
        submit-children={value.getField('id').getValue() ? 'Save' : 'Add'}
        submit-onClick={onSubmit}
        submit-className={styles.submitButton}
        delete-isHidden={!value.getValue()?.id}
        delete-children="Delete Period"
        delete-onClick={onDelete}
        delete-className={styles.deleteButton}
      />
    </div>
  );
});

export const EditPeriodForm = React.memo(form);

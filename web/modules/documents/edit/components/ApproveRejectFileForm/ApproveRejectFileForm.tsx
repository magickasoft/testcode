import * as React from 'react';
import { FormButtons, withForm } from 'components/Form';
import { Button } from 'components/Button';
import { DownloadLink } from 'components/DownloadLink';
import { InputText } from 'components/Input';
import { DocumentFileDownloadFilterModel } from 'modules/documents/details';
import { DocumentFileFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  kind: 'approve' | 'reject';
  Field: any;
  value: typeof DocumentFileFormModel;
  onChange: (value: typeof DocumentFileFormModel) => any;
  onCancel: () => any;
  onSubmit: () => any;
}

const [form] = withForm((props: Properties) => {
  const { Field, value, onCancel, onSubmit, kind } = props;
  const plainValue = value.getValue();

  return (
    <div>
      <DownloadLink
        className={styles.downloadLink}
        parametersForm={new DocumentFileDownloadFilterModel().setValue({ id: plainValue.id })}
        baseUrl="/document-file-download"
      >
        {plainValue.name}
      </DownloadLink>
      <Field input-multiline className={styles.notes} name="notes" label="You can add a comment" input={InputText} />
      <FormButtons
        cancel-disabled={value.isPending()}
        cancel-onClick={onCancel}
        cancel-className={styles.cancelButton}
        submit-pending={value.isPending()}
        submit-disabled={value.isPending() || value.hasError()}
        submit-face={kind === 'approve' ? Button.FACE_PRIMARY : Button.FACE_DANGER}
        submit-children={kind === 'approve' ? 'Approve' : 'Reject'}
        submit-className={styles.submitButton}
        submit-onClick={onSubmit}
      />
    </div>
  );
});

export const ApproveRejectFileForm = React.memo(form);

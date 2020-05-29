import * as React from 'react';
import { FormButtons, withForm } from 'components/Form';
import { Tooltip } from 'components/Tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ResetUserAccessFormModel } from '../../models';

import styles from './styles.module.css';

interface Properties {
  value: typeof ResetUserAccessFormModel;
  onCancel: () => any;
  onSubmit: () => any;
}

const [form] = withForm((props: Properties) => {
  const { value, onCancel, onSubmit } = props;
  const plain = value.getValue();

  return (
    <>
      <span className={styles.label}>
        The link below will be sent to <i>{plain.login}</i>
      </span>
      <div className={styles.copy}>
        <input readOnly value={plain.url} />
        <Tooltip id="copiedHint" type="dark" content="Link Copied">
          <CopyToClipboard text={plain.url}>
            <span>COPY LINK</span>
          </CopyToClipboard>
        </Tooltip>
      </div>
      <FormButtons
        cancel-disabled={value.isPending()}
        cancel-onClick={onCancel}
        cancel-className={styles.cancelButton}
        submit-pending={value.isPending()}
        submit-disabled={value.isPending() || value.hasError()}
        submit-children="Send"
        submit-onClick={onSubmit}
        submit-className={styles.submitButton}
      />
    </>
  );
});

export const ResetAccessForm = React.memo(form);

import * as React from 'react';
import { Button } from 'components/Button';
import { FormButtons, FormPropTypes, withForm } from 'components/Form';
import { Info } from 'components/Info';
import { InputText } from 'components/Input';
import { ElementPropTypes } from 'utils/prop-types';
import { filter } from 'utils/props';
import { CompanyInviteModel } from '../../models';

import styles from './styles.module.css';

interface Props {
  Field: any;
  value: typeof CompanyInviteModel;
  onChange: (value: typeof CompanyInviteModel) => any;
  onSubmit: (value: typeof CompanyInviteModel) => any;
  onClose: () => any;
  companyDetails: any;
  companyId: number;
}

const [CompanyInvite] = withForm((props: Props) => {
  const { companyDetails, Field, value, onChange, onSubmit, companyId, onClose } = props;
  const error = value.getError();

  React.useEffect(() => {
    onChange(value.setValue({ externalId: companyId }));
  }, [companyId]);

  return (
    <div {...filter(props, ElementPropTypes)}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <Info className={styles.companyName} label="Company">
            {companyDetails?.name}
          </Info>
          <Field name="firstName" label="First Name" input={InputText} />
        </div>
        <div className={styles.column}>
          <Field name="email" label="Admin Email" input={InputText} input-type="email" />
          <Field name="lastName" label="Last Name" input={InputText} />
        </div>
      </div>
      <div className={styles.message}>{error?.message}</div>
      <FormButtons
        cancel-disabled={value.isPending()}
        cancel-onClick={onClose}
        submit-pending={value.isPending()}
        submit-disabled={value.isPending() || value.hasError()}
        submit-children="Send"
        submit-face={Button.FACE_PRIMARY}
        submit-onClick={onSubmit}
      />
    </div>
  );
});

export { CompanyInvite };

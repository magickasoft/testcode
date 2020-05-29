import * as React from 'react';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { FormButtons } from 'components/Form';
import { Layer } from 'components/Layer';
import { Panel } from 'components/Panel';
import { FieldSet } from 'components/Field';
import { Button } from 'components/Button';
import { CompanyFormModel } from '../../models';
import { Relationships } from './components/Relationships';
import { Description } from './components/Description';
import { AccountDetails } from './components/AccountDetails';
import { AddressInformation } from './components/AddressInformation';

import styles from './styles.module.css';

interface Properties extends ReturnType<typeof PagePropTypes> {
  value: typeof CompanyFormModel;
  name: string;
  onChange: (value: typeof CompanyFormModel) => any;
  onSubmit: () => any;
  onCancel: () => any;
  onDelete: () => any;
  children: React.ReactNode;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: 'Company Profile',
  face: Page.FACE_SECONDARY,
  value: new CompanyFormModel(),
  children: undefined
};

export const EditCompanyForm = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { children, value, onChange, onSubmit, onCancel, onDelete, name, ...rest } = extendedProperties;
  const hasChanges = !isEqual(value.getValue(), value.getInitialValue());
  const plain = value.getValue();

  return (
    <Page {...rest} subTitle={name} className={styles.page}>
      <Layer rounded shadowed>
        <Panel
          title={+plain.id ? 'Edit Company Information' : 'Add New Company'}
          collapsible={false}
          content-className={styles.content}
        >
          <Relationships value={value} onChange={onChange} />
          <Description value={value} onChange={onChange} />
          <AccountDetails value={value} onChange={onChange} />
          <AddressInformation value={value} onChange={onChange} />
        </Panel>
      </Layer>
      <div className={styles.buttons}>
        <FormButtons
          cancel-disabled={value.isPending()}
          cancel-onClick={onCancel}
          submit-pending={value.isPending()}
          submit-disabled={!hasChanges || value.isPending() || value.hasError()}
          submit-onClick={onSubmit}
          delete-isHidden={!+plain.id}
          delete-children="Delete"
          delete-onClick={onDelete}
        />
      </div>
      {children}
    </Page>
  );
});

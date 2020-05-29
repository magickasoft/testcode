import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { FieldSet } from 'components/Field';
import isEqual from 'lodash/isEqual';
import { Page, PageDefaultProps } from 'components/Page';
import { FormButtons } from 'components/Form';
import { Layer } from 'components/Layer';
import { Panel } from 'components/Panel';
import { ListModel } from 'utils/list';
import { LicenseFormModel } from '../../models';
import { manageLicensePath } from '../../constants';
import { LicenseDetails } from './components/LicenseDetails';
import { TaxRates } from './components/TaxRates';
import { AddressInformation } from './components/AddressInformation';

import styles from './styles.module.css';

interface Properties {
  value: typeof LicenseFormModel;
  onChange: (value: typeof LicenseFormModel) => any;
  onSubmit: () => any;
  onCancel: () => any;
  onDelete: () => any;
  companies: ListModel;
  children: React.ReactNode;
}

const editLicenseForm = React.memo((properties: Properties) => {
  const { value, onChange, onSubmit, onDelete, onCancel, companies, children } = properties;
  const { id, name } = value.getValue();

  return (
    <Page {...properties} subTitle={name || 'Create New License'} isPending={value.isPending()}>
      {children}
      <Layer rounded shadowed>
        <Panel title="Edit License Information" collapsible={false} content-className={styles.content}>
          <LicenseDetails value={value} onChange={onChange} companies={companies} />
          <TaxRates value={value} onChange={onChange} />
          <AddressInformation value={value} onChange={onChange} />
        </Panel>
      </Layer>
      <div className={styles.footer}>
        <FormButtons
          cancel-disabled={value.isPending()}
          cancel-onClick={onCancel}
          submit-pending={value.isPending()}
          submit-disabled={value.isPending() || value.hasError()}
          submit-onClick={onSubmit}
          delete-isHidden={!+id}
          delete-children="Delete"
          delete-onClick={onDelete}
        />
      </div>
    </Page>
  );
});

(editLicenseForm as any).defaultProps = {
  ...PageDefaultProps,
  title: 'License Page',
  face: Page.FACE_SECONDARY
};

export { editLicenseForm as EditLicenseForm };

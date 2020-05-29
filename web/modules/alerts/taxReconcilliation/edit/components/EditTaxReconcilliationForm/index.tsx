import * as React from 'react';
import isEqual from 'lodash/isEqual';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { FormButtons } from 'components/Form';
import { Layer } from 'components/Layer';
import { Panel } from 'components/Panel';
import { TaxReconcilliationFormModel } from '../../models';
import { General } from './components/General';
import { ReportInformation } from './components/ReportInformation';

import styles from './styles.module.css';

interface Properties extends ReturnType<typeof PagePropTypes> {
  value: typeof TaxReconcilliationFormModel;
  name: string;
  onChange: (value: typeof TaxReconcilliationFormModel) => any;
  onSubmit: () => any;
  onCancel: () => any;
  onDelete: () => any;
  children: React.ReactNode;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: 'Tax Reconciliation Page',
  face: Page.FACE_SECONDARY,
  value: new TaxReconcilliationFormModel(),
  children: undefined
};

export const EditTaxReconcilliationForm = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { children, value, onChange, onSubmit, onCancel, onDelete, name, ...rest } = extendedProperties;
  const hasChanges = !isEqual(value.getValue(), value.getInitialValue());
  const plain = value.getValue();
  return (
    <Page {...rest} subTitle={name} className={styles.page}>
      <Layer rounded shadowed>
        <Panel
          title={+plain.id ? 'Tax Reconciliation Report Edit' : 'Add New Tax Reconciliation Report'}
          collapsible={false}
          content-className={styles.content}
        >
          <General value={value} onChange={onChange} />
          <ReportInformation value={value} onChange={onChange} />
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

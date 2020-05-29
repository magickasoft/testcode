import * as React from 'react';
import isEqual from 'lodash/isEqual';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { FormButtons } from 'components/Form';
import { Layer } from 'components/Layer';
import { Panel } from 'components/Panel';
import { WholesaleFormModel } from '../../models';
import { General } from './components/General';
import { ProductsData } from './components/ProductsData';
import { SalesData } from './components/SalesData';
import { ReportInformation } from './components/ReportInformation';

import styles from './styles.module.css';

interface Properties extends ReturnType<typeof PagePropTypes> {
  value: typeof WholesaleFormModel;
  name: string;
  onChange: (value: typeof WholesaleFormModel) => any;
  onSubmit: () => any;
  onCancel: () => any;
  onDelete: () => any;
  children: React.ReactNode;
  license: object;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: 'Wholesale Analytics',
  face: Page.FACE_SECONDARY,
  value: new WholesaleFormModel(),
  children: undefined,
  license: {}
};

export const EditWholesaleForm = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { children, value, onChange, onSubmit, onCancel, onDelete, name, license, ...rest } = extendedProperties;
  const hasChanges = !isEqual(value.getValue(), value.getInitialValue());
  const plain = value.getValue();
  return (
    <Page {...rest} subTitle={name} className={styles.page}>
      <Layer rounded shadowed>
        <Panel
          title={+plain.id ? 'Wholesale Report Edit' : 'Add New Wholesale Report'}
          collapsible={false}
          content-className={styles.content}
        >
          <General value={value} onChange={onChange} license={license} />
          <SalesData value={value} onChange={onChange} />
          <ProductsData value={value} onChange={onChange} />
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

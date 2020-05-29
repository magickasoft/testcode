import * as React from 'react';
import isEqual from 'lodash/isEqual';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { FormButtons } from 'components/Form';
import { Layer } from 'components/Layer';
import { Panel } from 'components/Panel';
import { RetailFormModel } from '../../models';
import { General } from './components/General';
import { ProductsData } from './components/ProductsData';
import { PosSales } from './components/PosSales';
import { SalesData } from './components/SalesData';
import { ReportInformation } from './components/ReportInformation';

import styles from './styles.module.css';

interface Properties extends ReturnType<typeof PagePropTypes> {
  organizationSetting: any;
  value: typeof RetailFormModel;
  name: string;
  onChange: (value: typeof RetailFormModel) => any;
  onSubmit: () => any;
  onCancel: () => any;
  onDelete: () => any;
  children: React.ReactNode;
  license: object;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: 'Retail Monthly Analytics',
  face: Page.FACE_SECONDARY,
  organizationSetting: undefined,
  value: new RetailFormModel(),
  children: undefined,
  license: {}
};

export const EditRetailForm = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const {
    children,
    value,
    onChange,
    onSubmit,
    onCancel,
    onDelete,
    name,
    organizationSetting,
    license,
    ...rest
  } = extendedProperties;
  const hasChanges = !isEqual(value.getValue(), value.getInitialValue());
  const plain = value.getValue();
  const salesPos = organizationSetting?.report_setting?.retail.sales_pos || false;
  return (
    <Page {...rest} subTitle={name} className={styles.page}>
      <Layer rounded shadowed>
        <Panel
          title={+plain.id ? 'Retail Report Edit' : 'Add New Retail Report'}
          collapsible={false}
          content-className={styles.content}
        >
          <General value={value} onChange={onChange} license={license} />
          <SalesData value={value} onChange={onChange} />
          {salesPos && <PosSales value={value} onChange={onChange} />}
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

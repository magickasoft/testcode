import * as React from 'react';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { addPrefix } from 'utils/common';
import { RetailInformation } from './components/RetailInformation';
import { ProductReportTable } from './components/ProductReportTable';
import { SalesSubmittedTable } from './components/SalesSubmittedTable';
import { ReportHistoryTable } from './components/ReportHistoryTable';

interface Properties extends ReturnType<typeof PagePropTypes> {
  organizationSetting: object;
  retailId: number;
  license: any;
  company: any;
  value: any;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: undefined,
  face: Page.FACE_SECONDARY,
  organizationSetting: undefined,
  retailId: undefined,
  license: {},
  company: {}
};

const RetailAnalytics = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { value, license, company, children, organizationSetting, ...rest } = extendedProperties;
  const isQuarterly = value?.quarterly || false;
  return (
    <Page
      {...rest}
      title={`Retail ${isQuarterly ? 'Quarterly' : 'Monthly'} Analytics`}
      subTitle={addPrefix('RR')(value?.id || '--')}
    >
      <RetailInformation value={value} license={license} company={company} />
      <ProductReportTable value={value} organizationSetting={organizationSetting} />
      <SalesSubmittedTable value={value} organizationSetting={organizationSetting} />
      <ReportHistoryTable />
      {children}
    </Page>
  );
});

export { RetailAnalytics };

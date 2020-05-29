import * as React from 'react';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { addPrefix } from 'utils/common';
import { TaxReconcilliationInformation } from './components/TaxReconcilliationInformation';
import { TaxReportTable } from './components/TaxReportTable';
import { ReportHistoryTable } from './components/ReportHistoryTable';

interface Properties extends ReturnType<typeof PagePropTypes> {
  taxReconcilliationId: number;
  license: any;
  company: any;
  value: any;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: 'Tax Reconciliation Page',
  face: Page.FACE_SECONDARY,
  taxReconcilliationId: undefined,
  license: {},
  company: {}
};

const TaxReconcilliationAnalytics = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { value, license, company, children, ...rest } = extendedProperties;

  return (
    <Page {...rest} subTitle={addPrefix('TR')(value?.id || '--')}>
      <TaxReconcilliationInformation value={value} license={license} company={company} />
      <TaxReportTable value={value} />
      <ReportHistoryTable />
      {children}
    </Page>
  );
});

export { TaxReconcilliationAnalytics };

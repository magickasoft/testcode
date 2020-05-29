import * as React from 'react';
import { Page, PageDefaultProps, PagePropTypes } from 'components/Page';
import { addPrefix } from 'utils/common';
import { InvoiceSubmittalInformation } from './components/InvoiceSubmittalInformation';
import { TaxReportTable } from './components/TaxReportTable';

interface Properties extends ReturnType<typeof PagePropTypes> {
  invoiceSubmittalId: number;
  license: any;
  company: any;
  value: any;
}

const defaultProperties = {
  ...PageDefaultProps,
  title: 'Invoice Submittal Page',
  face: Page.FACE_SECONDARY,
  invoiceSubmittalId: undefined,
  license: {},
  company: {}
};

const InvoiceSubmittalDetails = React.memo((properties: Properties) => {
  const extendedProperties: Properties = { ...defaultProperties, ...properties };
  const { value, license, company, children, ...rest } = extendedProperties;

  return (
    <Page {...rest} subTitle={addPrefix('IS')(value?.id || '--')}>
      <InvoiceSubmittalInformation value={value} license={license} company={company} />
      <TaxReportTable value={value} />
      {children}
    </Page>
  );
});

export { InvoiceSubmittalDetails };

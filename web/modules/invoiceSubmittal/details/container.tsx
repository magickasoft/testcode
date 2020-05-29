/* eslint-disable camelcase */
import * as React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { licenseListSelectors } from 'modules/licenses/list';
import { companiesListSelectors } from 'modules/companies/list';
import { InvoiceSubmittalDetailsModel } from './models';
import { invoiceSubmittalDetailsActions } from './actions';
import { INVOICE_SUBMITTAL_DETAILS_PATH } from './constants';
import { invoiceSubmittalDetailsSelectors } from './selectors';
import { InvoiceSubmittalDetails } from './components/InvoiceSubmittalDetails';

const container = (properties: RouteComponentProps) => {
  const {
    match: { params }
  } = properties;

  const invoiceSubmittalId = +params.id;
  const dispatch = useDispatch();
  const entity = useSelector(invoiceSubmittalDetailsSelectors.getEntity);
  const value = entity.getValue();

  React.useEffect(() => {
    dispatch(
      invoiceSubmittalDetailsActions.read.call(new InvoiceSubmittalDetailsModel().setValue({ id: invoiceSubmittalId }))
    );
  }, [invoiceSubmittalId]);

  const allLicenses = useSelector(licenseListSelectors.getValue);
  const allCompanies = useSelector(companiesListSelectors.getValue);

  const license = React.useMemo(() => allLicenses.find((i) => i.id === value[0]?.license_id) || {}, [
    value,
    allLicenses
  ]);

  const company = React.useMemo(() => allCompanies.find((i) => i.id === license?.company_id) || {}, [
    license,
    allCompanies
  ]);

  return (
    <InvoiceSubmittalDetails
      invoiceSubmittalId={invoiceSubmittalId}
      isPending={entity.isPending()}
      value={Array.isArray(value) && value.length === 1 ? value[0] : {}}
      license={license}
      company={company}
    />
  );
};

export const invoiceSubmittalDetailsRoute = <Route exact path={INVOICE_SUBMITTAL_DETAILS_PATH} component={container} />;

/* eslint-disable camelcase */
import * as React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { licenseListSelectors } from 'modules/licenses/list';
import { companiesListSelectors } from 'modules/companies/list';
import { TaxReconcilliationAnalyticsModel } from './models';
import { taxReconcilliationAnalyticsActions } from './actions';
import { TAX_RECONCILLIATION_ANALYTICS_PATH } from './constants';
import { taxReconcilliationAnalyticsSelectors } from './selectors';
import { TaxReconcilliationAnalytics } from './components/TaxReconcilliationAnalytics';

const container = (properties: RouteComponentProps) => {
  const {
    match: { params }
  } = properties;

  const taxReconcilliationId = +params.id;
  const dispatch = useDispatch();
  const entity = useSelector(taxReconcilliationAnalyticsSelectors.getEntity);
  const value = entity.getValue();

  React.useEffect(() => {
    dispatch(
      taxReconcilliationAnalyticsActions.read.call(
        new TaxReconcilliationAnalyticsModel().setValue({ id: taxReconcilliationId })
      )
    );
  }, [taxReconcilliationId]);

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
    <TaxReconcilliationAnalytics
      taxReconcilliationId={taxReconcilliationId}
      isPending={entity.isPending()}
      value={Array.isArray(value) && value.length === 1 ? value[0] : {}}
      license={license}
      company={company}
    />
  );
};

export const taxReconcilliationAnalyticsRoute = (
  <Route exact path={TAX_RECONCILLIATION_ANALYTICS_PATH} component={container} />
);

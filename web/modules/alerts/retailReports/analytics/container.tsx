/* eslint-disable camelcase */
import * as React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { licenseListSelectors } from 'modules/licenses/list';
import { companiesListSelectors } from 'modules/companies/list';
import { authOrgSettingSelector } from 'modules/auth/selectors';
import { RetailAnalyticsModel } from './models';
import { retailAnalyticsActions } from './actions';
import { RETAIL_ANALYTICS_PATH } from './constants';
import { retailAnalyticsSelectors } from './selectors';
import { RetailAnalytics } from './components/RetailAnalytics';

const container = (properties: RouteComponentProps) => {
  const {
    match: { params }
  } = properties;

  const retailId = +params.id;
  const dispatch = useDispatch();
  const organizationSetting = useSelector(authOrgSettingSelector);
  const entity = useSelector(retailAnalyticsSelectors.getEntity);
  const value = entity.getValue();

  React.useEffect(() => {
    dispatch(retailAnalyticsActions.read.call(new RetailAnalyticsModel().setValue({ id: retailId })));
  }, [retailId]);

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
    <RetailAnalytics
      retailId={retailId}
      organizationSetting={organizationSetting}
      isPending={entity.isPending()}
      value={Array.isArray(value) && value.length === 1 ? value[0] : {}}
      license={license}
      company={company}
    />
  );
};

export const retailAnalyticsRoute = <Route exact path={RETAIL_ANALYTICS_PATH} component={container} />;

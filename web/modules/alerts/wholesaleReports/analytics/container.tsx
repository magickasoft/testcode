/* eslint-disable camelcase */
import * as React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { licenseListSelectors } from 'modules/licenses/list';
import { companiesListSelectors } from 'modules/companies/list';
import { authOrgSettingSelector } from 'modules/auth/selectors';
import { WholesaleAnalyticsModel } from './models';
import { wholesaleAnalyticsActions } from './actions';
import { WHOLESALE_ANALYTICS_PATH } from './constants';
import { wholesaleAnalyticsSelectors } from './selectors';
import { WholesaleAnalytics } from './components/WholesaleAnalytics';

const container = (properties: RouteComponentProps) => {
  const {
    match: { params }
  } = properties;

  const wholesaleId = +params.id;
  const dispatch = useDispatch();
  const organizationSetting = useSelector(authOrgSettingSelector);
  const entity = useSelector(wholesaleAnalyticsSelectors.getEntity);
  const value = entity.getValue();

  React.useEffect(() => {
    dispatch(wholesaleAnalyticsActions.read.call(new WholesaleAnalyticsModel().setValue({ id: wholesaleId })));
  }, [wholesaleId]);

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
    <WholesaleAnalytics
      wholesaleId={wholesaleId}
      organizationSetting={organizationSetting}
      isPending={entity.isPending()}
      value={Array.isArray(value) && value.length === 1 ? value[0] : {}}
      license={license}
      company={company}
    />
  );
};

export const wholesaleAnalyticsRoute = <Route exact path={WHOLESALE_ANALYTICS_PATH} component={container} />;

import { TaxReconcilliationFilterModel } from '../../../../models';
import { Filter } from './Filter';

export const filterSettings = (companies, licenses) => ({
  companies,
  licenses,
  component: Filter,
  value: new TaxReconcilliationFilterModel(),
  onChange: (previous, current) => {
    if (!previous.company_id && !!current.company_id) {
      return { ...current, license_id: null };
    }
    if (!previous.license_id && !!current.license_id) {
      return { ...current, company_id: null };
    }
    return current;
  }
});

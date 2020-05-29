import { WholesaleReportsFilterModel } from '../../../../models';
import { Filter } from './Filter';

export const filterSettings = () => ({
  component: Filter,
  value: new WholesaleReportsFilterModel(),
  onChange: (previous, current) => {
    const newCurrent = { ...current };
    if ((!previous.company_id && !!current.company_id) || previous.company_id !== current.company_id) {
      newCurrent.license_id = null;
    }

    return {
      ...newCurrent,
      _options: {
        // eslint-disable-next-line
        ...previous._options,
        filters: [
          newCurrent.status ? { field: 'status', type: 'eq', value: newCurrent.status } : null,
          newCurrent.license_id ? { field: 'license_id', type: 'eq', value: newCurrent.license_id } : null
        ].filter(Boolean)
      }
    };
  }
});

import { CompaniesFilterModel } from '../../../../models';
import { Filter } from './Filter';

export const filterSettings = () => {
  const initial = new CompaniesFilterModel();

  return {
    component: Filter,
    value: initial,
    onChange: (previous, current) => {
      const activeAsString = current.active.toString();

      return {
        ...current,
        active: activeAsString ? activeAsString === 'true' : null
      };
    }
  };
};

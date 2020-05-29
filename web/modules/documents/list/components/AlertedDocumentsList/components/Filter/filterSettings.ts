import { DocumentsFilterModel } from '../../../../models';
import { Filter } from './Filter';
import { getFilterOptions } from '../../getOptions';

export const filterSettings = (firstAlert: number, lastAlert: number, initialFilter?: any) => {
  let initial = new DocumentsFilterModel();

  if (initialFilter) {
    initial = initial.setValue({
      ...initial.getValue(),
      ...getFilterOptions(firstAlert, lastAlert, initialFilter)
    });
  }

  return {
    component: Filter,
    value: initial,
    onChange: (previous, current) => getFilterOptions(firstAlert, lastAlert, current, previous),
    hiddenFields: [
      initialFilter?.company_id || initialFilter?.license_id ? 'company_id' : null,
      initialFilter?.license_id ? 'license_id' : null
    ].filter((i) => !!i)
  };
};

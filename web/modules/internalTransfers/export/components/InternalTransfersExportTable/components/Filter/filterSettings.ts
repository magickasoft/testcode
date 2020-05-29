import { InternalTransfersExportFilterModel } from '../../../../models';
import { Filter } from './Filter';

export const filterSettings = () => {
  const initial = new InternalTransfersExportFilterModel();

  return {
    component: Filter,
    value: initial,
    onChange: (previous, current) => ({
      ...current,
      // eslint-disable-next-line
        _options: {
        // eslint-disable-next-line
          ...previous._options,
        filters: [current.status ? { field: 'status', type: 'eq', value: current.status } : null].filter(Boolean)
      }
    })
  };
};

import moment from 'moment';
import { HistoryFilterModel } from '../../models';
import { Filter } from './Filter';

export const filterSettings = () => {
  const initial = new HistoryFilterModel();

  return {
    component: Filter,
    value: initial,
    onChange: (previous, current) => ({
      ...current,
      // eslint-disable-next-line
        _options: {
        // eslint-disable-next-line
        ...previous._options,
        filters: [
          current.entity_type
            ? {
                field: 'entity_type',
                type: 'eq',
                value: current.entity_type
              }
            : null,
          current.action_type
            ? {
                field: 'action',
                type: 'eq',
                value: current.action_type
              }
            : null,
          current.date_from
            ? {
                field: 'created_at',
                type: 'gte',
                value: moment(current.date_from).startOf('day')
              }
            : null,
          current.date_to
            ? {
                field: 'created_at',
                type: 'lte',
                value: moment(current.date_to).add(1, 'days').startOf('day')
              }
            : null
        ].filter(Boolean)
      }
    })
  };
};

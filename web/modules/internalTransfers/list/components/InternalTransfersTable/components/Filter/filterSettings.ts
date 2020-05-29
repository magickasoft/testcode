import moment from 'moment';
import { InternalTransfersFilterModel } from '../../../../models';
import { Filter } from './Filter';

export const filterSettings = () => {
  const initial = new InternalTransfersFilterModel();

  return {
    component: Filter,
    value: initial,
    onChange: (previous, current) => {
      const newCurrent = { ...current };

      if (previous.recipient_company_id !== newCurrent.recipient_company_id) {
        newCurrent.recipient_license_id = null;
      }

      if (previous.sender_company_id !== newCurrent.sender_company_id) {
        newCurrent.sender_license_id = null;
      }

      return {
        ...newCurrent,
        _options: {
          // eslint-disable-next-line
          ...previous._options,
          filters: [
            newCurrent.status ? { field: 'status', type: 'eq', value: newCurrent.status } : null,
            newCurrent.sender_license_id
              ? { field: 'sender_license_id', type: 'eq', value: newCurrent.sender_license_id }
              : null,
            newCurrent.recipient_license_id
              ? { field: 'recipient_license_id', type: 'eq', value: newCurrent.recipient_license_id }
              : null,
            newCurrent.dateFrom
              ? {
                  field: 'date',
                  type: 'gte',
                  value: moment(newCurrent.dateFrom).startOf('day')
                }
              : null,
            newCurrent.dateTo
              ? {
                  field: 'date',
                  type: 'lte',
                  value: moment(newCurrent.dateTo).add(1, 'days').startOf('day')
                }
              : null
          ].filter(Boolean)
        }
      };
    }
  };
};

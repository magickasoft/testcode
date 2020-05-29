import { FormFieldModel, FormModel } from 'utils/form';

const HistoryFilterFields = {
  entity_type: new FormFieldModel(''),
  action_type: new FormFieldModel(''),
  date_from: new FormFieldModel(null),
  date_to: new FormFieldModel(null)
};

export const HistoryFilterModel = FormModel.Factory(HistoryFilterFields);

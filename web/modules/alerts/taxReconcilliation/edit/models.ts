import moment from 'moment';
import { FormFieldModel, FormModel } from 'utils/form';

export const propertiesFormFields = {
  total: new FormFieldModel(0)
};

const PropertiesFormModel = FormModel.Factory(propertiesFormFields);

export const currentMonthFormFields = {
  calculated: new PropertiesFormModel(),
  changes_abs: new PropertiesFormModel(),
  changes_rel: new PropertiesFormModel(),
  collected: new PropertiesFormModel()
};

const CurrentMonthFormModel = FormModel.Factory(currentMonthFormFields);

const taxReconcilliationFormFields = {
  common_alert_criteria: new FormFieldModel(0),
  common_alert_criteria_abs: new FormFieldModel(0),
  created_at: new FormFieldModel(null),
  current_month: new CurrentMonthFormModel(),
  deleted_at: new FormFieldModel(null),
  fetched_bank: new FormFieldModel(true),
  fetched_pos: new FormFieldModel(true),
  id: new FormFieldModel(0),
  license_id: new FormFieldModel(0),
  notes: new FormFieldModel(''),
  ready: new FormFieldModel(true),
  sf_external_id: new FormFieldModel(''),
  start_date: new FormFieldModel(moment()),
  status: new FormFieldModel(''),
  updated_at: new FormFieldModel(null)
};

export const TaxReconcilliationFormModel = FormModel.Factory(taxReconcilliationFormFields);

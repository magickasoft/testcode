import moment from 'moment';
import { FormFieldModel, FormModel } from 'utils/form';

export const productPropertiesFormFields = {
  bud_per_qty: new FormFieldModel(0),
  bud_qty: new FormFieldModel(0),
  bud_sold: new FormFieldModel(0),
  concentrate_per_qty: new FormFieldModel(0),
  concentrate_qty: new FormFieldModel(0),
  concentrate_sold: new FormFieldModel(0),
  infused_edible_per_qty: new FormFieldModel(0),
  infused_edible_qty: new FormFieldModel(0),
  infused_edible_sold: new FormFieldModel(0),
  infused_nonedible_per_qty: new FormFieldModel(0),
  infused_nonedible_qty: new FormFieldModel(0),
  infused_nonedible_sold: new FormFieldModel(0),
  infused_per_qty: new FormFieldModel(0),
  infused_qty: new FormFieldModel(0),
  infused_sold: new FormFieldModel(0),
  other_per_qty: new FormFieldModel(0),
  other_qty: new FormFieldModel(0),
  other_sold: new FormFieldModel(0),
  plants_per_qty: new FormFieldModel(0),
  plants_qty: new FormFieldModel(0),
  plants_sold: new FormFieldModel(0),
  shake_trim_per_qty: new FormFieldModel(0),
  shake_trim_qty: new FormFieldModel(0),
  shake_trim_sold: new FormFieldModel(0),
  total_per_qty: new FormFieldModel(0),
  total_qty: new FormFieldModel(0),
  total_sold: new FormFieldModel(0)
};

const ProductPropertiesFormModel = FormModel.Factory(productPropertiesFormFields);

export const productFormFields = {
  changes: new ProductPropertiesFormModel(),
  changes_abs: new ProductPropertiesFormModel(),
  values: new ProductPropertiesFormModel()
};

const ProductFormModel = FormModel.Factory(productFormFields);

export const salesPropertiesFormFields = {
  atm_load_per_qty: new FormFieldModel(0),
  atm_load_qty: new FormFieldModel(0),
  atm_load_sold: new FormFieldModel(0),
  cash_per_qty: new FormFieldModel(0),
  cash_qty: new FormFieldModel(0),
  cash_sold: new FormFieldModel(0),
  checks_per_qty: new FormFieldModel(0),
  checks_qty: new FormFieldModel(0),
  checks_sold: new FormFieldModel(0),
  credit_debit_per_qty: new FormFieldModel(0),
  credit_debit_qty: new FormFieldModel(0),
  credit_debit_sold: new FormFieldModel(0),
  internal_transfers_per_qty: new FormFieldModel(0),
  internal_transfers_qty: new FormFieldModel(0),
  internal_transfers_sold: new FormFieldModel(0),
  invoices_per_qty: new FormFieldModel(0),
  invoices_qty: new FormFieldModel(0),
  invoices_sold: new FormFieldModel(0),
  other_per_qty: new FormFieldModel(0),
  other_qty: new FormFieldModel(0),
  other_sold: new FormFieldModel(0),
  total_per_qty: new FormFieldModel(0),
  total_qty: new FormFieldModel(0),
  total_sold: new FormFieldModel(0)
};

const SalesPropertiesFormModel = FormModel.Factory(salesPropertiesFormFields);

export const salesFormFields = {
  changes: new SalesPropertiesFormModel(),
  changes_abs: new SalesPropertiesFormModel(),
  values: new SalesPropertiesFormModel()
};

const SalesFormModel = FormModel.Factory(salesFormFields);

export const salesMetrcFormFields = {
  changes_abs: new FormFieldModel(0),
  changes_rel: new FormFieldModel(0),
  metrc: new FormFieldModel(0),
  submitted: new FormFieldModel(0)
};

const SalesMetrcFormModel = FormModel.Factory(salesMetrcFormFields);

const wholesaleFormFields = {
  common_alert_criteria: new FormFieldModel(0),
  common_alert_criteria_abs: new FormFieldModel(0),
  created_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null),
  fetched_bank: new FormFieldModel(true),
  fetched_metrc: new FormFieldModel(true),
  id: new FormFieldModel(0),
  license_id: new FormFieldModel(0),
  notes: new FormFieldModel(''),
  product_current_month: new ProductFormModel(),
  product_peer_group: new ProductFormModel(),
  product_prior_3_month: new ProductFormModel(),
  product_prior_month: new ProductFormModel(),
  quarterly: new FormFieldModel(true),
  ready: new FormFieldModel(true),
  sales_metrc_comparison: new SalesMetrcFormModel(),
  sales_current_month: new SalesFormModel(),
  sales_prior_3_month: new SalesFormModel(),
  sales_prior_month: new SalesFormModel(),
  sf_external_id: new FormFieldModel(''),
  start_date: new FormFieldModel(moment()),
  status: new FormFieldModel(''),
  updated_at: new FormFieldModel(null)
};

export const WholesaleFormModel = FormModel.Factory(wholesaleFormFields);
